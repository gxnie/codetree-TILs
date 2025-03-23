const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("\n");
let cntThree = 0, cntFive = 0;

for(let i = 0; i < 10; i++){
    let a = Number(arr[i]);

    if(a % 3 === 0){
        cntThree++;
    }
     if(a % 5 === 0){
        cntFive++;
    }
}

console.log(cntThree,cntFive);