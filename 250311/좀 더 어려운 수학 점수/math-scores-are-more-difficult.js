// const fs = require("fs");

// let arr = fs.readFileSync(0).toString().trim();

// let aMat = arr[0];
// let aEng = arr[1];

// let bMat = arr[2];
// let bEng = arr[3];

// if(aMat > bMat || ((aMat === bMat) && (aEng > bEng))){
//     console.log("A");
// } else {
//     console.log("B");
// }


// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let scoreA = input[0].split(" ");
let scoreB = input[1].split(" ");

let mathA = Number(scoreA[0]), engA = Number(scoreA[1]);
let mathB = Number(scoreB[0]), engB = Number(scoreB[1]);

// 출력
if (mathA > mathB || (mathA == mathB && engA > engB)) {
    console.log("A");
} 
else {
    console.log("B");
}
