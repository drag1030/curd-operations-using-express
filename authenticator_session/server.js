const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    cookie:{maxAge:200000} ,
    resave: false,
    saveUninitialized: true
}));

// Mock user data (replace with database in real application)
const users = [
    { username: 'username', password: 'password', id: 1 }
];

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user by username and password
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        // Display alert message and redirect to login page
        return res.send('<script>alert("Invalid username or password"); window.location.href="/"</script>');
    }

    // Store user ID in session
    req.session.userId = user.id;

    // Redirect to authenticated page
    res.redirect('/authenticated');
});

// Authenticated route
app.get('/authenticated', (req, res) => {
    // Check if user is logged in
    if (!req.session.userId) {
        // Redirect to login page if not logged in
        return res.redirect('/');
    }

    // If logged in, display authenticated page
   // res.send('Welcome! You are authorized.');

    res.sendFile(__dirname + '/authenticated.html') ;
});

// Serve login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
