const fs=require('fs');

const delete0=(req,res)=>{
    const numb=req.body.td_no;
    const GetTodo=()=>{
        return new Promise((resolve,reject)=>{
            fs.readFile('C:\\Users\\김수민\\Desktop\\TOdolist\\todolist.json',(err,data)=>{
                if(err){
                    throw err;
                    }
                resolve(JSON.parse(data));
                });
            });
        };

    const RemoveTodo=(todos)=>{
        return new Promise((resolve,reject)=>{
            for(let i=0;i<todos['rows'].length;i++){
                if(todos['rows'][i]['td_no']==numb){
                    todos['rows'].splice(i,1);
                    i=-1;
                    }
                }
            fs.writeFile('C:\\Users\\김수민\\Desktop\\TOdolist\\todolist.json',JSON.stringify(todos,null,5),(err)=>{
                if(err){
                    throw err;
                    }
                resolve();
                });
            });
        }
        GetTodo()
            .then(RemoveTodo)
            .then(()=>{
                res.status(200).json({result:true, data:[],code:'success'});
            })
            .catch((err)=>{
                console.error(err);
                res.status(500).json(err|{result:false,data:[],code:'unknown error'});
            });
};

module.exports=delete0;