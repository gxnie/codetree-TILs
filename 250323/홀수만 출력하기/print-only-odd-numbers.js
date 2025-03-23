const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("\n");
let newArr = arr.map(Number);

for(let i = 0; i < newArr.length; i++){
    if(newArr[i] % 3 === 0){
        console.log(newArr[i]);
    }
}