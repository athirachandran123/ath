

const express= require('express');
const chalk=require('chalk');
const path=require('path');

var app = express();
app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index',{list:['book1','book2','book3'],title:"library"});
});
app.listen(3088,()=>{
    console.log('listening to port'+chalk.blue(3088));
});

