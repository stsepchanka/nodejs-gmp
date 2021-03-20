process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  var inputString = process.stdin.read();
  if(inputString !== null) {
    process.stdout.write(`${inputString.split("").reverse().join("").slice(1)}\n`);
  }
});
