import express from 'express';
import validationSchema from './validator.js';
import yup from 'yup';

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

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
