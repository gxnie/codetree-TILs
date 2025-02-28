const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr >= 1.0){
    console.log("High");
} else if(arr >= 0.5) {
    console.log("Middle");
} else {
    console.log("Low");
}