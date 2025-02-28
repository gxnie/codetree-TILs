const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim();

if(arr == 'S'){
    console.log("Superior");
} else if(arr == 'A'){
    console.log("Excellent");
} else if(arr == 'B'){
    console.log("Good");
} else if (arr == 'C'){
    console.log("Usually");
} else if (arr == 'D'){
    console.log("Effort");
} else {
    console.log("Failure");
}