const fs = require("fs");

let arr = fs.readFileSync(0).toString().split("-");

let num1 = arr[0];
let num2 = Number(arr[1]);
let num3 = Number(arr[2]);

console.log(`${num1}-${num3}-${num2}`);