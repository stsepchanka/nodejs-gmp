const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter a string (type "exit"  to finish)> '
});

const lineEventListener = (inputString) => {
  if (inputString === 'exit') {
    rl.close();
    rl.removeListener('line', lineEventListener);
    process.exit();
  }

  const reversedString = inputString.split("").reverse().join("");
  console.log("Reversed string is: ", reversedString);
  rl.prompt();
}


rl.on('line', lineEventListener);

rl.prompt();

