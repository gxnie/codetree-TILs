const fs = require("fs");

// 여러가지 조건으로 쪼개기 /와 / 사이에 조건을 넣고 |로 구분
let arr = fs.readFileSync(0).toString().split(/ |\n/);

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

console.log(a,b,c);