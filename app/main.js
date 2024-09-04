function matchPattern(inputLine, pattern) {
  let regx = pattern.replace(/\\d/g, '[0-9]').replace(/\\w/g, '[0-9a-zA-z]');
  if (pattern.length === 1) {
    return inputLine.includes(pattern);
  }else if (pattern === '\\d'){
    return /\d/.test(inputLine);
  }else if (pattern === '\\w'){
    return /\w/.test(inputLine);
  }else if (pattern.startsWith('[') && pattern.endsWith(']')){
    let charGroup = pattern.slice(1,-1);
    let newP = new RegExp(`[${charGroup}]`);
    return newP.test(inputLine);
  }else {
    return new RegExp(regx).test(inputLine);
    throw new Error(`Unhandled pattern ${pattern}`);
  }
}

function main() {
  const pattern = process.argv[3];
  const inputLine = require("fs").readFileSync(0, "utf-8").trim();

  if (process.argv[2] !== "-E") {
    console.log("Expected first argument to be '-E'");
    process.exit(1);
  }

  // You can use print statements as follows for debugging, they'll be visible when running tests.
  console.log("Logs from your program will appear here");

  // Uncomment this block to pass the first stage
  if (matchPattern(inputLine, pattern)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main();
