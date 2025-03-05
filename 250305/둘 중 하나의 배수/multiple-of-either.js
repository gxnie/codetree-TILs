const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr % 3 === 0 || arr % 5 === 0){
    console.log(1);
} else {
    console.log(0);
}