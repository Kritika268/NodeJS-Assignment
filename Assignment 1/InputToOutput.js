const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);

readableStream.on('error', (err) => {
  console.log('Error Reading input file: ', err);
});

writableStream.on('error', (err) => {
  console.log('Error writing to output file: ', err);
});

writableStream.on('finish', () => {
  console.log("Writing completed.");
});

const outputReadStream = fs.createReadStream('output.txt', 'utf8');
outputReadStream.on('data', (chunk) => {
  const lines = chunk.split('\n');
  lines.forEach(line => {
    console.log(line);
  });
});

outputReadStream.on('end', () => {
  console.log('Finished displaying content from output.txt');
});