const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(".");

let y = Number(arr[0]);
let m = Number(arr[1]);
let d = Number(arr[2]);

console.log(`${m}-${d}-${y}`)