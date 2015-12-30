`
/**
 * Created by jiawei.tu on 12/21 0021.
 */
var fs = require('fs');
var http = require('http');

const PORT = 3000;
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'application/pdf'});
    var rs = fs.createReadStream('./my.pdf');
    rs.on('data', function(chunk) {
        res.write(chunk);
    });
    rs.on('end', function() {
        res.end();
    });
}).listen(PORT);
console.log('listen on:' + PORT);
`
