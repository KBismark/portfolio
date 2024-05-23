const express = require('express');
const path = require('path');
const fs = require('fs')
const app = express();

const baseDirectory = path.join(__dirname,'/dist');

app.use('/',express.static(baseDirectory))
const PORT = 3003;
app.listen(PORT,()=>{
    console.log('Serving on port '+PORT);
})