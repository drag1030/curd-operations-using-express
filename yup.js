const express = require('express');
const validationSchema = require('./yup_validator.js');
const yup = require('yup');

const app = express();
app.use(express.json());

// Route to handle POST request
app.post('/validate', (req, res) => {
    const data = req.body;

    // Validate data against schema
    validationSchema.validate(data)
        .then(validData => {
            // Data is valid
            res.status(200).json({ message: 'Data is valid', data: validData });
        })
        .catch(error => {
            // Validation failed
            res.status(400).json({ message: 'Validation error', error: error.errors });
        });
});

// Route to handle GET request with user input
app.get('/data', (req, res) => {
    // Retrieve user input from query parameters
    const {name,age,email}= req.query;
  //
  // const userData = {
  //     name : name ,
  //     age : age ,
  //     email : email
  // } ;
    // Example: Retrieve data based on user input (replace with your logic)
    // const userData = {
    //     name: name || 'John Doe', // If name parameter is not provided, use default value
    //     age: 30,
    //     email: 'john@example.com'
    // };

    res.status(200).json({ message: `Received values - Name: ${name}, Age: ${age}, Email: ${email}` });

});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
