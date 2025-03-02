const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(/ |\n/);
let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);
let d = Number(arr[3]);
let e = Number(arr[4]);

if(a>b){
    console.log(1);
} else {
    console.log(0);
}

if(a>c){
    console.log(1);
} else {
    console.log(0);
}

if(a>d){
    console.log(1);
} else {
    console.log(0);
}

if(a>e){
    console.log(1);
} else {
    console.log(0);
}