const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(" ");

let a = Number(arr[0]); // 19
let b = Number(arr[1]); // 81

console.log(a + b);
