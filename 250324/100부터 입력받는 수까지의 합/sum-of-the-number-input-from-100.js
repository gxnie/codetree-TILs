const fs = require("fs");

let a = Number(fs.readFileSync(0).toString().trim());
let sum = 0;

for(let i = a; i <= 100; i++){
    sum += i;
}

console.log(sum);