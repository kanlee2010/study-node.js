var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public'))); // http://localhost:3000/public/house.png

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var router = express.Router();
router.route('/process/login/:name').post(function(req, res) {
    console.log("/process/login:name 라우팅 함수에서 받음.");

    var paramName = req.params.name;

    var paramId = req.body.id || req.query.id;
    var paramPasswd = req.body.password || req.query.password;

    res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    res.write("<h1>서버에서 로그인 응답</h1>");
    res.write("<div><p>" + paramId + "</p></div>");
    res.write("<div><p>" + paramPasswd + "</p></div>");
    res.write("<div><p>" + paramName + "</p></div>");
    res.end();
});
app.use('/', router);
app.all('*', function(req, res) {
    res.status(404).send("<h1>요청하신 페이지는 없어요</h1>");
});

var server = http.createServer(app).listen(app.get('port'), function() {
    console.log("익스프레스로 서버를 실행함 : " + app.get('port'));
});