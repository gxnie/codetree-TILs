const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr < 0){
    console.log("ice");
} else if(arr >= 100) {
    console.log("vapor");
} else {
    console.log("water");
}