const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

let sum = a + b + c;
let avg = parseInt(sum/3);

console.log(sum);
console.log(avg);
console.log(sum - avg);