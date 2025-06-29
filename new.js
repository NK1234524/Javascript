function SaveDB(data){
    return new Promise((resolve,reject)=>{
        let dataspeed = Math.floor(Math.random()*10)+1;

        if(dataspeed>4){
              return resolve();
        }
        else{
            return reject();    
        }
    });
}

SaveDB("Name is khan")
    .then(()=>{
        console.log("Data updated");
    })
    .catch(()=>{
        console.log("Data not updated");
    })