const fs = require("fs");

let text = fs.readFileSync(0).toString().trim();

console.log(text);