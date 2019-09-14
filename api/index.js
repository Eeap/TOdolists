const express=require("express");
const insert=require('./insert');
const router=express.Router();

router.post('/insert',insert);

module.exports=router;