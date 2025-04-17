const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("\n");
let a;
let index = 0;

while(true){
    a = Number(arr[index]);
    if(a === 0){
        break;
    } else {
        console.log(a);
    }
    index++;
}