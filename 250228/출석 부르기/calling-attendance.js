const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr == 1){
    console.log("John");
} else if (arr == 2){
    console.log("Tom");
} else if (arr == 3){
    console.log("Paul");
} else {
    console.log("Vacancy");
}