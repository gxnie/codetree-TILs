const fs = require("fs");
 // readFileSync()함수를 사용하여 파일에서 데이터를 읽어올 수 있음
 // 이 함수를 사용하려면 코드의 맨 위에 const fs = require("fs");를 적어주어야함

 let a = Number(fs.readFileSync(0).toString());

 console.log(a + 2);