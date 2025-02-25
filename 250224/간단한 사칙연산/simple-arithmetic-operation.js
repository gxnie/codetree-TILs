const fs = require("fs");

let arr = fs.readFileSync(0).toString().split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

console.log(a+b);
console.log(a-b);
console.log(parseInt(a/b)); // 몫구하기
console.log(a%b);