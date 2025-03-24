const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1]), sum = 0, cnt = 0;

for(let i = a; i <= b; i++){
    if((i % 5 === 0) || (i % 7 === 0)){
        sum += i;
        cnt += 1;
    }
}
let c = sum / cnt;
console.log(sum, c.toFixed(1));