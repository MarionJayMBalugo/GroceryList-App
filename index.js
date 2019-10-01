const express=require('express');
const app=express();
const fs=require('fs');
const path = require('path')
app.use(express.static(path.join(__dirname+'/public/')));
app.get('/',(req,res)=>{
    fs.readFile('./views/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});
app.put('/item/create');
app.get('/item/retrieve/all');
app.get('/item/retrieve/:id');
app.post('/item/update');
app.delete('/item/delete');
app.listen('8080',console.log("listening to port 8080"));   