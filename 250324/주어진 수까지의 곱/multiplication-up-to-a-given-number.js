const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1]), prod = 1;

for(let i = a; i <= b; i++){
    prod *= i;
}

console.log(prod);