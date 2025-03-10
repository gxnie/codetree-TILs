const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(/ |\n/);

let aAge = Number(arr[0]), aGender = arr[1];
let bAge = Number(arr[2]), bGender = arr[3];

if((aAge >= 19 && aGender === "M") || (bAge >= 19 && bGender === "M")){
    console.log(1);
} else {
    console.log(0);
}