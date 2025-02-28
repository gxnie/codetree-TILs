const fs = require("fs");

let arr = Number(fs.readFileSync(0).toString());

if ( arr >= 90){
    console.log("A");
} else if ( arr >= 80) {
    console.log("B");
} else if ( arr >= 70) {
    console.log("C");
} else if ( arr >= 60) {
    console.log("D");
} else {
    console.log("F");
}