const express=require('express');
const insert=require('./insert');
const router=express.Router();
const list=require('./list');
const delete0=require('./delete');

router.post('/insert',insert);
router.post('/list',list);
router.post('/delete',delete0);

module.exports=router;