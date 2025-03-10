const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim();

let aMat = arr[0];
let aEng = arr[1];

let bMat = arr[2];
let bEng = arr[3];

if(aMat > bMat){
    console.log("A");
} else if(aMat < bMat){
    console.log("B");
}

if((aMat === bMat) && (aEng > bEng)){
    console.log("A");
} else if((aMat === bMat) && (aEng < bEng)){
    console.log("B");
}