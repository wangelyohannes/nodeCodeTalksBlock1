const {readFile, writeFile} = require('fs');
// Using the readFile and writeFile functions from the fs module.

console.log('start');
// Logging start to the console.

readFile('./content/first.txt','utf8', (err, result)=> {
    // Reading the contents of first.txt asynchronously.
    // Takes the file path, encoding, and a callback function as arguments.

   if (err) {
       console.log(err);
       return 
   }
    // Checking for errors If an error occurred, log it and return.

   const first = result;
    // Storing the content of first.txt in the first variable.

   console.log(result);
    // Logging the content of first.txt to the console.

   readFile('./content/second.txt','utf8', (err, result)=> {
    // Reading the contents of second.txt asynchronously.
    // Takes the file path, encoding, and a callback function as arguments.

       if (err) {
           console.log(err);
           return 
       }
        // Checking for errors If an error occurred, log it and return.

       const second = result;
        // Storing the content of second.txt in the second variable.

       console.log(result);
        //Logging the content of second.txt to the console.

       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
        // Writing the result to a new file called 'result-async.txt' asynchronously.
        // Takes the file path, encoding, and a callback function as arguments.

           if (err) {
               console.log(err);
               return 
           }
            // Checking for errors If an error occurred, log it and return.

           console.log('done with the task');
            // Logging done with the task to the console.
        }
       );
   })
});


console.log('starting next task');
// Logging starting next task to the console.
