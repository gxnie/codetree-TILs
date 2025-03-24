const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1]), sum = 1, prod = 1;

for(let i = 1; i <= b; i++){
    if(i % a === 0){ 
        prod *= (sum * i);
    }
}



console.log(prod);