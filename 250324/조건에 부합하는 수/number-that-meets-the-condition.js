const fs = require("fs");

let a = Number(fs.readFileSync(0).toString().trim());
let result = "";

for(let i = 1; i <= a; i++){
    let e = parseInt(i / 8), s = parseInt(i % 7);

    if(((i % 2 === 0) && (i % 4 != 0))){
        continue;
    } else if(e % 2 === 0){
        continue;
    } else if (s < 4) {
        continue;
    }
    result += (i + " ");
}
console.log(result);