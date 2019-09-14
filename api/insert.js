const fs=require('fs');

const insert=(req,res)=>{
    let text=req.body.text;
    let date=req.body.date;
    let date_split=date.split('-');
    let year=date_split[0];
    let month=date_split[1];
    let day=date_split[2];
    console.log(year);
    console.log(month);
    console.log(day);
    //res.status(200);
    const DataCheck=()=>{
        return new Promise((resolve,reject)=>{
            if(!text||!year||!month||!day) {
                if (!text) {
                    reject({result:false, code:'empty_param',data:'text'});
                }
                else if(year){
                    reject({result:false, code:'empty_param',data:'year'});
                }
                else if(month){
                    reject({result:false, code:'empty_param',data:'month'});
                }
                else{
                    reject({result:false, code:'empty_param',data:'day'});
                }
            }
            resolve();
        });
    };
    const GetTodo=()=>{
        return new Promise((resolve, reject) =>{
           let todos;
           fs.readFile('C:\\Users\\김수민\\Desktop\\TOdolist\\todolist.json',(err ,data)=>{
              if(err)
                  throw err;
              else{
                  todos=JSON.parse(data);
                  resolve(todos);
              }
           });
        });
    };
    const doinsert=(todos)=>{
        return new Promise((resolve, reject) =>{
            const newtodo={
                td_no:todos.td_last_no+1;
                td_text:text;
                td_year:year;
                td_month:month;
                td_day:day;
            }
            todos['rows'].push(newtodo);
            todos['td_last_no']++;
            resolve(todos);
        });
    };
    const Save=(todos)=>{
        return new Promise((resolve, reject) => {
           fs.writeFile('C:\\Users\\김수민\\Desktop\\TOdolist\\todolist.json',JSON.stringify(todos,null,5),(err)=>{
               if(err)
                   throw err;
               resolve(todos);
           });
        });
    };
    DataCheck()
        .then(GetTodo)
        .then(doinsert)
        .then(Save)
        .then(()=>{
            res.status(200).json({result:true, data:[],code:'success'});
        })
        .catch((err)=>{
            console.error(err);
            res.status(500).json(err|{result:false,data[],code:'unknown error'});
        });


};



module.exports=insert;