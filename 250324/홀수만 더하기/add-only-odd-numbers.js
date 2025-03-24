const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split("\n");
let a = Number(arr[0]), sum = 0;

for(let i = 1; i <= arr.length; i++){
      let x = Number(arr[i]);
      if((x % 2 === 1) && (x % 3 === 0)){
        sum += x;
    }
}

console.log(sum);