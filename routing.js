const express = require('express');
const bodyParser = require('body-parser');
const db = require('knex')(require('./knexfile').development);


const knex = require('knex');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8001;

async function createStudent(req, res) {
    try {
        const { first_name, last_name, email } = req.body;
        if (!first_name || !last_name || !email) {
            return res.status(400).json({ error: 'Missing required fields: first_name, last_name, email' });
        }

        await db('student').insert({ first_name, last_name, email });
        res.status(201).send('Student created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function updateStudent(req, res) {
    try {
        const { id } = req.params;
        const { first_name, last_name, email } = req.body;
        await db('student').where({ id }).update({ first_name, last_name, email });
        res.send('Student data updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function deleteStudent(req, res) {
    try {
        const { id } = req.params;
        await db('student').where({ id }).del();
        res.send('Student data deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getStudentById(req, res) {
    try {
        const { id } = req.params;
        const student = await db('student').orderBy('id').where({ id }).first();
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
async function getAllStudents(req, res) {
    try {
        // Retrieve all student records from the database
        const students = await db('student').select('*');

        // Check if there are no students found
        if (students.length === 0) {
            return res.status(404).json({ error: 'No students found' });
        }

        // Return the list of students
        res.json(students);
    } catch (error) {
        // Handle any errors that occur during the database query
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

app.post('/students', createStudent);
app.patch('/students/:id', updateStudent);
app.delete('/students/:id', deleteStudent);
app.get('/students/:id', getStudentById);
app.get('/students', getAllStudents);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export a function to close the server
module.exports = {
    closeServer: () => {
        server.close();
    },
    app: app // Export the app for testing purposes
};


