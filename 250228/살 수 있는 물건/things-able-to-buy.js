const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr >= 3000){
    console.log("book");
} else if (arr >= 1000){
    console.log("mask");
} else {
    console.log("no");
}