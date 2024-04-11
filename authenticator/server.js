// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const session = require('express-session');
// // const csrf = require('csurf');
// //
// // const app = express();
// // const PORT = process.env.PORT || 3000;
// //
// // // Middleware
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
// // app.use(csrf({ cookie: true })); // Use csurf middleware
// //
// // // Middleware to add CSRF token to response locals
// // app.use((req, res, next) => {
// //     res.locals.csrfToken = req.csrfToken(); // Add CSRF token to response locals
// //     next();
// // });
// //
// // // Routes
// // app.get('/', (req, res) => {
// //     res.sendFile(__dirname + '/login.html');
// // });
// //
// // app.post('/login', (req, res) => {
// //     const { username, password } = req.body;
// //
// //     // Example login validation (replace with your actual authentication logic)
// //     if (username === 'admin' && password === 'password') {
// //         req.session.user = username; // Store username in session
// //         res.redirect('/authenticated');
// //     } else {
// //         res.redirect('/');
// //     }
// // });
// //
// // app.get('/authenticated', (req, res) => {
// //     // Check if user is authenticated
// //     if (!req.session.user) {
// //         res.redirect('/');
// //         return;
// //     }
// //
// //     res.send(`Welcome, ${req.session.user}!`);
// // });
// //
// // // Error handling middleware for CSRF token validation errors
// // app.use((err, req, res, next) => {
// //     if (err.code === 'EBADCSRFTOKEN') {
// //         // Handle CSRF token errors here
// //         res.status(403).send('CSRF protection error');
// //         return;
// //     }
// //     next(err);
// // });
// //
// // // Start server
// // app.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });
// //
// //
//
//
//
// const express = require('express');
// const session = require('express-session');
//
// const app = express();
// const port = process.env.PORT || 3000;
//
// const bodyParser = require('body-parser');
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
//
// app.use(session({
//     secret: 'your_secret_key',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true, httpOnly: true }
// }));
//
// const users = [
//     { username: 'admin', password: 'password' }
// ];
//
// const isLoggedIn = (req, res, next) => {
//     if (req.session.isLoggedIn) {
//         return next(); // If logged in, proceed to the next middleware or route
//     }
//     res.redirect('/login'); // If not logged in, redirect to login page
// };
//
// // Login page route (GET)
// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/login.html');
// });
//
// // Login form submission route (POST)
// // app.post('/login', (req, res) => {
// //     const { username, password } = req.body;
// //
// //     const foundUser = users.find(user => user.username === username);
// //     if (!foundUser || password !== foundUser.password) {
// //         return res.status(401).send('Invalid username or password');
// //     }
// //
// //     req.session.isLoggedIn = true;
// //     res.redirect('/authenticated');
// // });
//
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//
//     // Example login validation (replace with your actual authentication logic)
//     if (username === 'admin' && password === 'password') {
//         req.session.user = username; // Store username in session
//         res.redirect('/authenticated');
//     } else {
//         res.redirect('/login');
//     }
// });
//
// // Authorized page route (GET) (protected)
// app.get('/authenticated', isLoggedIn, (req, res) => {
//     res.send('Welcome, authorized user!');
// });
//
// // Logout route (GET)
// app.get('/logout', (req, res) => {
//     req.session.destroy(); // Destroy the session
//     res.redirect('/login'); // Redirect to login page after logout
// });
//
// app.listen(port, () => console.log(`Server listening on port ${port}`));


const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const secretKey = 'your_secret_key';

// Mock user data (replace with database in real application)
const users = [
    { username: 'username', password: 'password', id: 1 }
];


app.post('/login', (req, res) => {
    const { username, password } = req.body;


    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        // Display alert message and redirect to login page
        return res.send('<script>alert("Invalid username or password"); window.location.href="/"</script>');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

    res.redirect(`/authenticated?token=${token}`);
});



app.get('/authenticated', (req, res) => {
    const token = req.query.token;

    // Verify JWT token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
           //return res.status(401).json({ message: 'Unauthorized' });
          //alert (message : invalid user) ;


            return   res.redirect('/') ;


        }


        res.sendFile( __dirname + '/authenticated.html') ;
    });
});

// Serve login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
