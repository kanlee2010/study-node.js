var http = require('http');

var server = http.createServer();
var host = '192.168.0.15';
var port = 3000;
server.listen(port, host, 50000, function() {
    console.log("웹서버가 실행되었습니다: " + host + ':' + port);
});

server.on('connection', function(socket) {
    console.log("클라이언트가 접속 했습니다.");
});

server.on('request', function(req, res) {
    console.log("클라이언트 요청");
    //console.dir(req);
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Response Page</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>웹서버에서의 응답</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
})