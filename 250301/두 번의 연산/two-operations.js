const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr % 2 == 1){
    arr += 3;
}

if(arr % 3 == 0){
    arr /= 3;
}

console.log(arr);