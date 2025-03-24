const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(arr[0]),sum = 0, cnt = 0;

for(let i = 1; i <= n; i++){
    let x = Number(arr[i]);
    sum += x;
    cnt += 1;
}

let c = sum / cnt;

console.log(sum,c.toFixed(1));