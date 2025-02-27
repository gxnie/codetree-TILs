const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(" ");

let cm = Number(arr[0]);
let kg = Number(arr[1]);

let b = parseInt((10000*kg)/(cm*cm));

if( b >= 25){
    console.log(b);
    console.log("Obesity");
} else {
    console.log(b);
}