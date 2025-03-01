const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr % 2 == 0){
    arr /= 2;
}

if(arr % 2 == 1){
    arr += 1;
    arr /= 2;
}

console.log(arr);

