var calc = {};
calc.add = function(a, b) {
    console.log("a=%d, b=%d", a, b);
    return a+b;
};
console.log("모듈 분리 전 실행 %d", calc.add(10,10));

module.exports = calc;
// exports.add = function(a, b) {} 로도 가능
