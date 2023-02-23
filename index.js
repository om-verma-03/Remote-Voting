const express = require('express');
const port = 4400;
const app = express();


app.get('/',function(req,res){
    res.send('Hello');    
})
app.listen(port,function(err){
    if(err) { console.log(`Error in creating a server`); return; }

    console.log('server running');
})
