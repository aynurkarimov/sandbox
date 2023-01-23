const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('qwerty', '5', 1_000_000, 64, 'sha512', () => {
  console.log('1st end', Date.now() - start);
});

crypto.pbkdf2('qwerty', '5', 1_000_000, 64, 'sha512', () => {
  console.log('2st end', Date.now() - start);
});

crypto.pbkdf2('qwerty', '5', 1_000_000, 64, 'sha512', () => {
  console.log('3st end', Date.now() - start);
});

crypto.pbkdf2('qwerty', '5', 1_000_000, 64, 'sha512', () => {
  console.log('4st end', Date.now() - start);
});

crypto.pbkdf2('qwerty', '5', 1_000_000, 64, 'sha512', () => {
  console.log('5st end', Date.now() - start);
});

console.log('start', start);