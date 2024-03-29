const knex = require('knex');
const config = require('./knexfile');

// Create a Knex instance with the development configuration
const db = knex(config.development);

// Perform a simple query
db.select('*').from('student')
    .then(rows => {
        console.log(rows);
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        db.destroy(); // Close the database connection
    });

module.exports = db; // Export the Knex instance
