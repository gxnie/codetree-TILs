const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("\n");
let sum = 0, cnt = 0;

for(let i = 0; i <= arr.length; i++){
    let x = Number(arr[i]);
    if((x >= 0) && (x <= 200)){
        sum += x;
        cnt += 1;
    }
}
let c = sum / cnt;

console.log(sum, c.toFixed(1));

