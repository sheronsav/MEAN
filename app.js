// var express=require("express");
// var app=new express();
// app.get('/',function(req,res){
//     res.send("Hello world!!")
// });
// app.listen(3000,function(){
//     console.log('listening to port 3000');
// });


// const express=require("express");
// const chalk=require('chalk');
// const path=require('path');


// var app=new express();
// app.use(express.static(path.join(__dirname,"/public")));

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+"/src/views/index.html"));
// });
// app.listen(3000,function(){
//    console.log('listening to port'+chalk.green('3000'));
// });


const express=require("express");
const chalk=require('chalk');
const path=require('path');

var nav=[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}];
const booksRouter=require('./src/routes/bookRoutes.js')(nav);


var app=new express();
app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);



app.set('views','./src/views');
app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render('index',
{
        title:"Library Mgment",
        nav
});
});




app.listen(3000,function(){
   console.log('listening to port'+chalk.green('3000'));
});
