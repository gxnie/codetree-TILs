const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

arr = arr == 1 ? "t" : "f";

console.log(arr);