/**
 * Created by rakeshsherwal on 9/10/2014.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('rakesh World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://1+27.0.0.1:1337/');
