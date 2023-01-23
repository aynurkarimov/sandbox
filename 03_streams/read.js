const {createReadStream} = require('fs');

const readStream = createReadStream(__dirname + '/folder/huge.txt');

const result = [];

readStream.on('data', (chunk) => {
  if (chunk)
  result.push(chunk.toString())
})

readStream.on('end', () => {
  console.log('data?', result)
})