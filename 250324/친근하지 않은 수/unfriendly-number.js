const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;

for(let i = 1; i <= arr; i++){
    if(((i % 2 === 0) || (i % 5 === 0))){
        continue;
    } else if((i % 3 === 0)|| (i % 5 === 0)){
        continue;
    }
    cnt++;
}

console.log(cnt);