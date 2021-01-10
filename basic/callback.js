function add(a, b, callback) {
    var result = a + b;
    callback(result);

    var count = 0; // 클로져
    var history = function() {
        count++;
        return count + ' : ' + a + ' + ' + b + ' = ' + result;
    }
    return history;
}

var add_history = add(10, 11, function(result) {
    console.log("더하기 콜백 결과: " + result);
})

console.log("add_history의 자료형: " + typeof(add_history));
console.log("함수 결과 값 실행: " + add_history());
console.log("함수 결과 값 실행: " + add_history());
console.log("함수 결과 값 실행: " + add_history());