// Create two buffers with the given strings
const buffer1 = Buffer.from("JavaScript is easy");
const buffer2 = Buffer.from(" We are learning and understanding");

// Concatenate the two buffers
const combinedBuffer = Buffer.concat([buffer1, buffer2]);

// Print the concatenated buffer
console.log("Combined Buffer:", combinedBuffer.toString());

// Find and print the total length of the final buffer
console.log("Total Length of Combined Buffer:", combinedBuffer.length);

// Slice the buffer to extract the word "easy"
const extractedBuffer = combinedBuffer.slice(14, 18); // "easy" starts at index 15 and ends at index 19

// Print the extracted part
console.log("Extracted Word:", extractedBuffer.toString());

// Convert the entire buffer back to string and print
console.log("Combined Buffer as String:", combinedBuffer.toString());
