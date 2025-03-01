const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr == 5){
    console.log("A");
}

if(arr % 2 == 0){
    console.log("B");
}