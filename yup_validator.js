const yup = require("yup");

// Define validation schema
const validationSchema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
});

module.exports =  validationSchema ;
