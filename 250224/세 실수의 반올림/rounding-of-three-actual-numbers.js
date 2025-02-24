const fs = require("fs");

let arr = fs.readFileSync(0).toString().split("\n");
// 입력한 값을 불러오면, 우리가 읽을 수 없는 값으로 불러와짐.
// .toString()을 사용하여 문자열로 변환
// \n 기준으로 잘라줌 -> 자르면 배열 형식으로 바뀜
// 배열(문자열) -> 숫자로 바꾸기 위해서 Number()함수 사용
let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));