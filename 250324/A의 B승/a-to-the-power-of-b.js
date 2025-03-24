const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1]), prod = 1;

for(let i = 1; i <= b; i++){
    prod *= a;
}

console.log(prod);

// 2의5승
// 2 * 2
// 4 * 2
// 8 * 2
// 16 * 2