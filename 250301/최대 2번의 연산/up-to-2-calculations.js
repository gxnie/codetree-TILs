const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr % 2 == 0){
    arr = parseInt(arr / 2);
}

if(arr % 2 == 1){
    arr = parseInt((arr+1)/2);
}

console.log(arr);

