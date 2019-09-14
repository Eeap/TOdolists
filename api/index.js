const express=require('express');
const insert=require('./insert');
const router=express.Router();
const list=require('./list');

router.post('/insert',insert);
router.post('/list',list);
module.exports=router;