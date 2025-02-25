const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

let num1 = a + b; // 13 
let num2 = a - b; // 7
let num3 = parseFloat(num1 / num2);

console.log(num3.toFixed(2));