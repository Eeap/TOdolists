const express=require("express");
const router=express.Router();

router.post('/insert',require('./insert'));

module.exports=router;