const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("\n");
let cnt = 0;

for(let i = 0; i < 5; i++){
    let newArr = Number(arr[i]);
    if(newArr % 2 === 0){
        cnt++;
    }
}

console.log(cnt);