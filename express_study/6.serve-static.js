var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);

//app.use(static(path.join(__dirname, 'public'))); // http://localhost:3000/house.png
app.use('/public', static(path.join(__dirname, 'public'))); // http://localhost:3000/public/house.png
app.use(function(req, res, next) {
    console.log("첫번째 미들웨어 호출됨.");
});

var server = http.createServer(app).listen(app.get('port'), function() {
    console.log("익스프레스로 서버를 실행함 : " + app.get('port'));
});