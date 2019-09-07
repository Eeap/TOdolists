const fs=require('fs');

const insert=(req,res)=>{
    let text=req.body.text;
    let date=req.body.date;
    console.log(text);
    console.log(date);
};