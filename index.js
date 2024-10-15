
// const {execSync} = require('child_process');
const express = require('express');
const path = require('path');
// const fs = require('fs');
const app = express();

const baseDirectory = path.join(__dirname);
// app.use((req, res,next)=>{
//     console.log(req.url);
//     if(req.url === '/'){
//        return res.status(200).send(fs.readFileSync(path.join(__dirname, '/index.html'), 'utf8'))
//     }
//     next()

// })  design-o1tk.onrender.com

app.use('/home',express.static(baseDirectory))

// const PORT = 80;
// app.listen(()=>{
//     console.log('Serving on port '+PORT);
// })


var http = require('http');
var server = http.createServer(app);
server.listen();

