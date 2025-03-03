const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(" ")

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

let resultA, resultB;

if(a <= b && a <= c){
    resultA = 1;
} else {
    resultA = 0;
}

if(a === b & a === c){
    resultB = 1;
}  else {
    resultB = 0;
}

console.log(`${resultA} ${resultB}`);