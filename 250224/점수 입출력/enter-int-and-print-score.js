const fs = require("fs");

let a = Number(fs.readFileSync(0).toString());

console.log(`Your score is ${a} point.`);