require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT;


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
    console.log(req)
    res.send(JSON.stringify({list:[1,2,3,4,5,6]}))
})

app.listen(port, (req, res) => {  
    console.log( `server listening on port: ${port}`);
})