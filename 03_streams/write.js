const { writeFileSync, createWriteStream } = require('fs');

// sync/async doesnt matter
// heap gets out of memory
const writingData = [];

for (let i = 0; i < 100_000_000; i++) {
  writingData.push(i+"hi")
}

writeFileSync(__dirname + '/folder/huge.txt', writingData.join('\r'), { encoding: 'utf-8', flag: 'a+' })

// streams
// divide writing into chucks
(async () => {
  const writeStream = createWriteStream(__dirname + '/folder/huge.txt');
  
  for (let i = 0; i < 100_000_000; i++) {
    const overWatermark = writeStream.write(`${i}-hi\r`);
  
    if (!overWatermark) {
      // console.log('how many times')
      await new Promise((resolve) => {
        writeStream.once('drain', resolve);
      })
    }
  }
})();
