const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

arr = arr==100 ? "pass" : "failure";

console.log(arr);