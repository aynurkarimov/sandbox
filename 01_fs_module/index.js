const fs = require('fs');
const path = require('path');

// Reading
const file = fs.readFileSync(__dirname + '/folder/nestedFolder/file.txt', {encoding: 'utf-8'});
const filePath = path.join(__dirname, 'folder', 'reading.txt');

fs.readFile(filePath, { encoding: 'utf-8'}, (err, data) => {
  if (err) {
    console.log('err')
    return false
  }

  console.log('data', data)
})

// Write
fs.writeFileSync(__dirname + '/folder/writing.txt', 'hello\r', {encoding: 'utf-8', flag: 'a+'})
fs.appendFile(__dirname + '/folder/writing.txt', 'jhajjajaaj', (err) => console.log(err))

// Folders
fs.mkdir(__dirname + '/folder/allo', {recursive: true}, (err) => console.log(err))
fs.rmdir(__dirname + '/folder/allo', {recursive: true} , (err) => console.log('err', err))