const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1]), sum = 0;

for(let i = a; i <= b; i++){
    sum += i;
}

console.log(sum);