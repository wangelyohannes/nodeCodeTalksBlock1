const {readFileSync, writeFileSync} = require('fs'); // This line imports the readFileSync and writeFileSync from the Node.js 




const fs = require('fs'); // This allows access to file system


const first = readFileSync('./content/first.txt','utf8')  // This allows us to read first.txt synchronously
const second = readFileSync('./content/second.txt','utf8') // // This allows us to read second.txt synchronously


console.log(first, second); // This logs both text to the console



writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);
// This allow us to write a file synchronously, & combines the first and second text file


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});
// This works like the one above, combines the first and second text file, and also flags for errors think?