const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

console.log(arr);

if(arr < 0){
    console.log("minus");
}