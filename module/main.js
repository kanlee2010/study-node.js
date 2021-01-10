// 내장 모듈
var calc = require("./module"); // module.exports
console.log("모듈 분리 후 실행 %d", calc.add(10,10));

// 외장 모듈
var nconf = require("nconf");
nconf.env();
var val = nconf.get("OS");
console.log("OS 환경변수의 값:" + val);
