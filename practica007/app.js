const http = require('http');

http.createServer((req, res)=>{
    console.log(req);
    res.writeHead(200, {'Content-type': 'application/json'});
    res.write(JSON.stringify({'Tony': "hola"}));
    res.end();

    

}).listen(3000, (err)=>{
    console.log("Server listening on port 3000");
});