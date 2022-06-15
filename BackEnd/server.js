const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': "text/plain"});
    console.log(req.protocol)
    res.end("Hello World!")
}).listen(8080)
