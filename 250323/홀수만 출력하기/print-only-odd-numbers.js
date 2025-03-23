const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(arr[0]);

for(let i = 1; i <= n; i++){
    let x = Number(arr[i]);

    if(( x % 2 === 1) && (x % 3 === 0)){
        console.log(x);
    }
}