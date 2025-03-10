const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if (arr % 4 === 0) {
    if (arr % 100 === 0) {
        if (arr % 400 === 0) {
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
    else {
        console.log("true");
    }
}
else {
    console.log("false");
}