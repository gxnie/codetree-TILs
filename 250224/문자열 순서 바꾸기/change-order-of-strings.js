const fs = require("fs");

// 앞뒤 공백 제거
let text = fs.readFileSync(0).toString().trim();

// 줄바꿈 기준으로 자르기
let arr = text.split("\n");

let a = arr[0];
let b = arr[1];
[a , b] = [b, a];

console.log(a);
console.log(b);