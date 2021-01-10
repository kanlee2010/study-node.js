var fs = require('fs');
fs.writeFile('./output.txt', 'Hello', function(err) {
    if(err) {
        console.log("write 에러 발생: ");
        console.dir(err);
        return;
    }
    console.log('쓰기 완료');
});