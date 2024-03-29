const fs = require('fs');

//Read Stream
// const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

// readStream.on('data', (chunk) =>
// {
//     console.log('---------NEW CHUNK---------');
//     console.log(chunk);
// })

//Write Stream
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) =>
// {
//     console.log('---------NEW CHUNK---------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

//Piping
readStream.pipe(writeStream);