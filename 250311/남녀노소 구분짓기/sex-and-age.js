const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(/ |\n/);

let aGender = Number(arr[0]), aAge = Number(arr[1]);

if(aAge >= 19){
    if(aGender === 0){
        console.log("MAN");
    } else {
        console.log("WOMAN");
    }
} else {
    if(aGender === 0){
        console.log("BOY");
    } else {
        console.log("GIRL");
    }
}