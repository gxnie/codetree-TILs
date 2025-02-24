const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim();

let text = arr.split("\n");
let a = text[0];
let b = Number(text[1]);
let c = Number(text[2]);

console.log(a);
console.log(b.toFixed(2));
console.log(c.toFixed(2));