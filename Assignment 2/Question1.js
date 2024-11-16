const buffer1 = Buffer.from([10, 20, 89, 43, 50, 67, 70, 86, 90, 88]);
console.log("Length of buffer: "+ buffer1.length);

console.log(buffer1[6]);
console.log(buffer1[8]);

buffer1[2]= 23;
console.log(buffer1);
console.log(buffer1[2]);

// Create a buffer with sample data
const buffer = Buffer.from([65, 66, 89, 68, 69, 70, 71, 72, 73, 80]); 

// (a) Print the length of the buffer on the console
console.log("Length of the buffer:", buffer.length);

// (b) Print the 6th and 8th index values
console.log("Value at 6th index:", buffer[6]); // ASCII value for 'G'
console.log("Value at 8th index:", buffer[8]); // ASCII value for 'I'

// (c) Modify the value at index 2 (change 89 to 23)
buffer[2] = 23;

// Print the modified buffer
console.log("Modified buffer:", buffer);
console.log(buffer[2]);
console.log("Modified buffer as string:", buffer.toString());
