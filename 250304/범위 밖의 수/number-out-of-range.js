const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr < 10 || arr > 20){
    console.log("yes");
} else {
    console.log("no");
}