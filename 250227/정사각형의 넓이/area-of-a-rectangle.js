const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

console.log(arr*arr);
if(arr < 5){
    console.log("tiny");
}