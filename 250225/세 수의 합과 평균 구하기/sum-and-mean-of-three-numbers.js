const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(" ");
let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

let total = (a+b+c)/3;

console.log(a+b+c);
console.log(total.toFixed(0));