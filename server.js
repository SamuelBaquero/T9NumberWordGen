require('dotenv').config()

const express = require('express');
const arrayPermutation = require('./arrayPermutation');
const path = require('path');

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {  
    app.use(express.static(path.join(__dirname, 'client/build')));  
    app.get('*', (req, res) => {    
        res.sendfile(path.join(__dirname = 'client/build/index.html'));  
    })
}

app.get('*', (req, res) => {  
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

app.post('*', (req, res)=>{
    result = arrayPermutation.permutation(req.body.number);
    res.send(JSON.stringify({list:result}))
})

app.listen(port, (req, res) => {  
    console.log( `server listening on port: ${port}`);
})