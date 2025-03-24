const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1]), sum = 0;

if(a >= b){
    for(let i = b; i <= a; i++){
        if(i % 5 === 0){
            sum += i;
        }
    }
} else if (a <= b){
    for(let i = a; i <= b; i++){
        if(i % 5 === 0){
            sum += i;
        }
    }
}

console.log(sum);
