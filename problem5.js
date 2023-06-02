var mysql=require('mysql');
// This imports mysql database
var connection=mysql.createConnection({
    // Create a connection object with the necessary database configuration.
  host:'localhost', // The hostname of the database server
  user:'your username', // Your MySQL username
  password:'your password',// Your MySQL password
  database:'your database name' // The name of the database you want to connect to
});
connection.connect(function(error){
    // Establish a connection to the database by calling the connect function.

  if(!!error){
    // If there is an error while connecting
    console.log(error);
  }else{
     // If the connection is successful
    console.log('Connected!:)');
  }
}); 
module.exports = connection;
// Export the connection object to make it available for other modules.

