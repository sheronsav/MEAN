const express=require("express");
const booksRouter=express.Router();

function router(nav){

    var books=[
        {
            title:"ABC",
            genre:"aaa",
            author:"bbb"
        },
        {
            title:"DEF",
            genre:"ccc",
            author:"ddd"
        },
        {
            title:"GHI",
            genre:"eee",
            author:"fff"
        },
        {
            title:"JKL",
            genre:"ggg",
            author:"hhh"
        },
        
    ];
    
    booksRouter.route('/')
    .get((req,res)=>{
    res.render('books',{
        title:"Books",
        nav,
        books
    });
    
    });
    
    booksRouter.route('/:id')
    .get((req,res)=>{
        const id=req.params.id;   //const{id}=req.param;
        res.render('book',{
            title:"Library Mgment",
            nav,
            book:books[id]
        });

    });
    return booksRouter;
}

module.exports=booksRouter;
