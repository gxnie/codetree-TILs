const fs = require("fs");

let a = Number(fs.readFileSync(0).toString());

let b = a + 1.5;

console.log(b.toFixed(2));