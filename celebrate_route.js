const express = require('express');
const validationMiddleware = require('./celebrate_validationMiddleware');

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 1000;

router.post('/signup', validationMiddleware, (req, res) => {
    // If the request passes validation, this handler will execute
    const { name, age,email} = req.body ;
    res.status(200).json({
     message: 'Signup successful',
     name:name,
     age:age,
     email:email
    }) ;

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
