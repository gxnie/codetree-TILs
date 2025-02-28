const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr >= 113){
    console.log(1);
} else {
    console.log(0);
}