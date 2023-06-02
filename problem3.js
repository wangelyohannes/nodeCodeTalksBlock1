const getTodos = () => {
    // Define a function named getTodos.

    const request = new XMLHttpRequest();
    // Create a new object to send an HTTP request.

   request.addEventListener('readystatechange', ()=>{
    // Add an event listener to track changes in the request state.
   
    if(request.readyState === 4 && request.status ===200){
        // Check if the request is completed and the response is successful.

      console.log(request.responseText)
        // Log the response text to the console.

       }
      else if (request.readyState === 4){
        // Check if the request is completed but the response is not successful.

        console.log('could not fetch the data');
        // Log an error message to the console.

      }
   });
   
   
   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    // Configure the request to perform a GET HTTP method on a specific URL.

   request.send();
    // Send the request to fetch the data from the specified URL.

   }
   
   
   
   
   getTodos();
   // Call the getTodos function to initiate the data fetching process.

   getTodos();
   // Call the getTodos function again to fetch the data once more.
