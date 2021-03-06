const bodyParser=require('body-parser');
const express=require('express');
const path=require('path');
const app=express();
const morgan=require('morgan');

app.use(morgan('[:date[iso]] :method :status :url :response-time(ms) :user-agent'));
app.use(express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',require('./router'));
app.use('/api',require('./api'));

app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
});
