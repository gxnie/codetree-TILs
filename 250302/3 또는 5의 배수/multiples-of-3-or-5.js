const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if(arr % 3 == 0){
    console.log("YES");
} else {
    console.log("NO");
}

if(arr % 5 == 0){
    console.log("YES");
} else {
    console.log("NO");
}