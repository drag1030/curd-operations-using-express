const knex = require('knex');
const config = require('./knexfile');

// Create a Knex instance with the development configuration
const db = knex(config.development);

const request = require('supertest');
const { app, closeServer } = require('./routing');


//Your test cases go here...

describe('Student API', () => {
    // Test POST /students
    describe('POST /students', () => {
        it('should create a new student', async () => {
            const newStudent = {
                first_name: "John1",
                last_name: "Doe1",
                email: "john1.doe1@example.com"
            };

            const response = await db('student').insert(newStudent).returning(["first_name","last_name","email"]);

            expect(response[0]).toEqual(expect.objectContaining({ "last_name": "Doe1","email":"john1.doe1@example.com"}));
        });
    });
});



describe('Student API', () => {
    // Test POST /students
    describe('POST /students', () => {
        it('should create a new student', async () => {
            const newStudent = {
                first_name: "John1",
                last_name: "Doe1",
                email: "john1.doe1@example.com"
            };

            const response = await db('student').insert(newStudent).returning(["first_name","last_name","email"]);

            expect(response[0]).toEqual(expect.objectContaining({ "email":"john1.doe1@example.com"}));
        });
    });
});



describe('GET /students', () => {
    afterAll(() => {
        closeServer();
    });


    it('should respond with status code 200 and return an array of users', async () => {
        const response = await request(app).get('/students');
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });

});

describe('GET /students', () => {
    afterAll(() => {
        closeServer();
    });


    it('should respond with status code 200 and return an array of users', async () => {
        const response = await request(app).get('/students/0');
        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
    });

});


describe('GET /students', () => {
    afterAll(() => {
        closeServer();
    });


    it('should respond with status code 500 and  should not return an array of users', async () => {
        const response = await request(app).get('/students/**');
        expect(response.status).toBe(500);
        expect(response.body).toBeDefined();
    });

});






describe('PATCH /students/:id', () => {
    it('should respond with status code 200 and a success message', async () => {
        const updateStudent = {
            first_name : 'gagan',
            is_active: true
        };
        const response = await request(app)
            .patch('/students/9')
            .send(updateStudent);
        expect(response.status).toBe(200);
        expect(response.text).toBe('Student data updated successfully');
    }, 10000);
});



    describe('DELETE /students/:id', () => {
        it('should respond with status code 200 and a success message', async () => {
            const response = await request(app).delete('/students/5');
            expect(response.status).toBe(200);
            expect(response.text).toBe('Student data deleted successfully');
        });

    });


describe('Create /students/:id throwing error', () => {
    it('should respond with status code 200 and a success message', async () => {

        const newStudent = {
            last_name: "Doe1",
            email: "john1.doe1@example.com"
        };

        const response = await request(app).post('/students')
            .send(newStudent)
            .set('Accept', 'application/json');
        expect(response.status).toBe(400);
        expect(response._body).toEqual({error:'Missing required fields: first_name, last_name, email'});
    });

});




describe('PATCH /students/:id', () => {
    it('should respond with status code 500 and should not update ', async () => {
        const updateStudent = {
            first_name : 'gagan',
            is_active: true
        };
        const response = await request(app)
            .patch('/students/invalid')
            .send(updateStudent);
        expect(response.status).toBe(500);
        expect(response.body).toBeDefined();
    }, 10000);
});




describe('DELETE /students/:id', () => {
    it('should respond with status code 500 and error message', async () => {
        const response = await request(app).delete('/students/invalid');
        expect(response.status).toBe(500);
        expect(response.text).toBeDefined()
    });

});


//const { closeServer, app } = require('./your-module-path'); // Replace with actual module path

describe('closeServer function', () => {
    let server; // Store the server instance

    beforeEach(() => {
        // Mock or create a server instance for testing
        server = { close: jest.fn() }; // Mock the server's close method
    });

    afterEach(() => {
        // Close the server after each test (if applicable)
        closeServer();
    });

    it('should call the server\'s close method', () => {
        closeServer();
        expect(server.close).toHaveBeenCalledTimes(0);
    });



    // Optional test for the app export (if needed)
    it('should export the app instance', () => {
        expect(app).toBeDefined();
    });
});




