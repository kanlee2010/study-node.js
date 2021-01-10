var express = require('express');
var http = require('http');

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
    console.log("첫번째 미들웨어 호출됨.");
    req.user = 'mike';
    next();
});

app.use(function(req, res, next) {
    console.log("두번째 미들웨어 호출됨.");
    /*첫번째 방법*/
    var person = {name:'소녀시대', age:20};
    //res.send(person);

    /*두번째 방법*/
    var personStr = JSON.stringify(person);
    //res.send(personStr);

    /*세번째 방법*/
    res.writeHead(200, {"Content-Type":"application/json;charset=utf8"});
    res.write(personStr);
    res.end();
})

var server = http.createServer(app).listen(app.get('port'), function() {
    console.log("익스프레스로 서버를 실행함 : " + app.get('port'));
});