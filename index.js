const express = require('express');
const path = require('path');
const fs = require('fs')
const app = express();

const baseDirectory = path.join(__dirname,'/dist');

app.use('/',express.static(baseDirectory))
// app.get('/',(req,res)=>{
//     res.setHeader('Content-Type','text/html').send(fs.readFileSync(`${baseDirectory}/trending.html`,'utf8'))
// })
const PORT = 30003;
app.listen(PORT,()=>{
    console.log('Serving on port '+PORT);
})