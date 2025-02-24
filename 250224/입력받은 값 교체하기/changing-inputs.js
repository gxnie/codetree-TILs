const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(" ");

let b = Number(arr[0]);
let a = Number(arr[1]);

console.log(a,b);