const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(/ |\n/);
let aMath = Number(arr[0]);
let aEng = Number(arr[1]);

let bMath = Number(arr[2]);
let bEng = Number(arr[3]);

if(aMath > bMath && aEng > bEng){
    console.log(1);
} else {
    console.log(0);
}