const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr % 13 === 0 || arr % 19 === 0){
    console.log("True");
} else {
    console.log("False");
}