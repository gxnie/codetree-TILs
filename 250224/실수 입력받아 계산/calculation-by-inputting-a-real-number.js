const fs = require("fs");

let arr = fs.readFileSync(0).toString().split("\n");

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = a + b;

console.log(c.toFixed(2));
