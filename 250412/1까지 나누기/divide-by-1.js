const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString().trim());
let cnt = 0, n = arr;

for(let i = 1; ; i++){
    n = Math.floor(n / i); 
    cnt++;

    if(n <= 1){
        break;
    }
}

console.log(cnt);
