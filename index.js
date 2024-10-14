
// const {execSync} = require('child_process');
// const express = require('express');
const path = require('path');
// const fs = require('fs');
// const app = express();

const baseDirectory = path.join(__dirname);
// app.use((req, res,next)=>{
//     console.log(req.url);
//     if(req.url === '/'){
//        return res.status(200).send(fs.readFileSync(path.join(__dirname, '/index.html'), 'utf8'))
//     }
//     next()

// })  design-o1tk.onrender.com

// app.use('/',express.static(baseDirectory))

// const PORT = 80;
// app.listen(()=>{
//     console.log('Serving on port '+PORT);
// })


var http = require('http');
var server = http.createServer(
    function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\nRoot: ',
        response = [message, version, baseDirectory].join('\n');
    res.end(response);
}
);
server.listen();

