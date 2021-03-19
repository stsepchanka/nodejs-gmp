const fs = require('fs');
const { pipeline } = require('stream');
const csv = require('csvtojson')

const readStream = fs.createReadStream("./HW1/csv/nodejs-hw1-ex1.csv");

const writeStream = fs.createWriteStream("./HW1/csv/nodejs-hw1-ex2.txt");

pipeline(
  readStream,
  csv(),
  writeStream,
  (err) => {
    if (err) {
      console.error('Error: ', err);
    } else {
      console.log('Done');
    }
  }
);