const fs = require("fs");

let a = fs.readFileSync(0).toString().trim();

if(a % 3 === 0 && a % 2 === 1){
    console.log("true");
} else if (a % 5 === 0 && a % 2 === 0){
    console.log("true");
} else {
    console.log("false");
}