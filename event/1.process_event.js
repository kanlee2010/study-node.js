process.on('exit', function() {
        console.log('exit 이벤트 발생');
    });

setTimeout(function() {
    console.log('2초 후에 실행 됨');
    process.exit();
}, 2000);

console.log("2초 후에 실행 예정");
