
const {execSync} = require('child_process');
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const baseDirectory = path.join(__dirname,'/dist');
app.use((req, res,next)=>{
    console.log(req.url);
    if(req.url === '/style.css'){
        execSync(`cd ${__dirname} && npm run build:css`, { stdio: 'inherit' });
    }
    next()

})
// app.get('/',())
app.use('/',express.static(baseDirectory))

const PORT = 3003;
app.listen(PORT,()=>{
    console.log('Serving on port '+PORT);
})