//validation.js
const { check } = require('express-validator');
// Import the function check, from the express-validator .

exports.signupValidation = [
    // Define an array of validation rules for the signup route.

   check('name', 'Name is requied').not().isEmpty(),
     // Add a validation rule for the name

   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
     // Add a validation rule for the email

   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
     // Add a validation rule for the password

]
exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
        // Similar to the previous email validation rule.
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
        // Similar to the previous password validation rule.
]


//Server.js file
const createError = require('http-errors');
// Import the createError module for handling HTTP errors.
const express = require('express');
// Import the express module to create an Express application.
const path = require('path');
// Import the path module to work with file paths.
const bodyParser = require('body-parser');
// Import the body-parser module to parse request bodies.
const cors = require('cors');
// Import the cors module to enable Cross-Origin Resource Sharing (CORS).
const { signupValidation, loginValidation } = require('./validation.js');
// Import the signupValidation and loginValidation arrays from the validation.js file.
const app = express();
// Create a new instance of the Express application.
app.use(express.json());
// Add middleware to parse JSON request bodies.
app.use(bodyParser.json());
// Enable CORS for cross-origin requests.
app.use(bodyParser.urlencoded({
    // Add middleware to parse request bodies as JSON and URL-encoded data.     
   extended: true
}));
app.use(cors());
// Uses CORS for cross-origin requests.
app.get('/', (req, res) => {
   res.send('Node js file upload rest apis');
   // Define a route handler for the root route that sends a response with the specified message.

});
app.post('/register', signupValidation, (req, res, next) => {
  // your registration code
});
app.post('/login', loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
   // console.log(err);
   err.statusCode = err.statusCode || 500;
   err.message = err.message || "Internal Server Error";
   res.status(err.statusCode).json({
     message: err.message,
   });
});
app.listen(3000,() => console.log('Server is running on port 3000'));