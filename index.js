var http = require('http');
var User = require('./models/user');
var Teather = require('./models/teather');

http.createServer( function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8;'});
    // console.log(request);
    if (request.url !== '/favicon.ico') {
        var user = new User(1, '张三', 18);
        user.enter();
        var teather = new Teather(2, '李四', 18);
        teather.teach(response);
        response.end();
    }
}).listen(8888);

console.log('Server running at http://localhost:8888');
