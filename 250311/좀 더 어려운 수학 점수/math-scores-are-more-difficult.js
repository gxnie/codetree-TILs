const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(/ |\n/);

let aMat = Number(arr[0]), aEng = Number(arr[1]);
let bMat = Number(arr[2]), bEng = Number(arr[3]);

if(aMat > bMat || ((aMat === bMat) && (aEng > bEng))){
    console.log("A");
} else {
    console.log("B");
}

