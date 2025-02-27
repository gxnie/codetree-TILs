const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr >= 80){
    console.log("pass");
} else {
    console.log(`${80 - arr} more score`);
}