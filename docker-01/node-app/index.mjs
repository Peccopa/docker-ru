import fs from 'fs';

fs.appendFile('my-file.txt', 'The file was created by Node.js', (err) => {
  if (err) throw err;
  console.log('The file is saved');
});

setTimeout(() => {
  console.log('End!');
}, 60000);
