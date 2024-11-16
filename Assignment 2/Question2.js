// Create a buffer of size 100
const buffer = Buffer.alloc(100);

// Write a string to the buffer
const string = "We are learning buffer module today and enjoying";
buffer.write(string);

// Read and print the contents of the buffer
// Convert the buffer to a string and print it
console.log("Buffer Contents:", buffer.toString());


