var express = require('express');
var http = require('http');

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
    console.log("첫번째 미들웨어 호출됨.");
    var userAgent = req.header('User-Agent'); // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36
    var paramName = req.query.name; // http://localhost:3000/?name=mike

    res.send('<h3>서버에서 응답. User-Agent -> : '+ userAgent +'</h3><h3>Param Name -> ' + paramName + '</h3>');
});

var server = http.createServer(app).listen(app.get('port'), function() {
    console.log("익스프레스로 서버를 실행함 : " + app.get('port'));
});