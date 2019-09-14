const fs=require('fs');

const list=(req,res)=>{
    const date=req.date;
    const date_split=date.split('-');

    const gettodo=()=>{
        return new Promise((resolve, reject) =>{
           fs.readFile('C:\\Users\\김수민\\Desktop\\TOdolist\\todolist.json',(err, data) =>{
              if(err)
                  throw err;
              let todos=JSON.parse(data);
              resolve(todos);
           });
        });

    };
    const search=(todos)=>{
      return new Promise((resolve, reject) => {
          let data=[];
          for(let i=0;i<todos['rows'].length;i++){
              if(date_split[0]==todos['rows'][i][year]){
                  if(date_split[1]==todos['rows'][i][month]){
                      if(date_split[2]==date_split[0]==todos['rows'][i][year][day])
                          data=todos['rows'][i];
                  }
              }
              else{
                  resolve();
              }
          }
          resolve(data);
      });
    };
    gettodo()
        .then(search)
        .then((data)=>{
            res.status(200);
        })
        .catch((err)=>{
            res.status(500).json(err|err.message);
        })

};

module.exports=list;