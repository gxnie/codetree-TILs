const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("-");

let m = Number(arr[0]);
let d = Number(arr[1]);
let y = Number(arr[2]);

console.log(`${y}.${m}.${d}`);