const fs = require("fs");

let n = Number(fs.readFileSync(0).toString().trim());
let result = 0;

for(let i = 0; i < 100; i++){
    result += i;
    if(result >= n){
        console.log(i);
        break;
    }
}