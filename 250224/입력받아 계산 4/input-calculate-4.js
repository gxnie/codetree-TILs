const fs = require("fs"); // 입력받기 위해서 필수

let a = Number(fs.readFileSync(0).toString());

console.log(a * 2);