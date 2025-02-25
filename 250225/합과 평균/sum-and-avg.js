const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = a + b;
let d = parseFloat(c/2).toFixed(1);

console.log(`${c} ${d}`);