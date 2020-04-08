
const connect = require('./client');



console.log('Connecting ...');
const client = connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
}

const handleUserInput = (keyStroke) => {
  if (keyStroke === '\u0003') {
    process.exit();
  }
  
}

setupInput();