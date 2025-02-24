const fs = require("fs");

let n = Number(fs.readFileSync(0).toString());

let result = n * 30.48;
console.log(result.toFixed(1));