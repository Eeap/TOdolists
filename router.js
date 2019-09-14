const fs=require('fs');
const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
   fs.readFile('./static/todolist.html',(err,data)=>{
      if(err)
          throw err;
      res.end(data);
   });
});

module.exports=router;

