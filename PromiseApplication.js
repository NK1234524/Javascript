function SaveDB(data){
    return new Promise((resolve,reject)=>{
        let networkspeed = Math.floor(Math.random()*10)+1;
        if(networkspeed>4){
            return resolve();
        }
        else{
            return reject();
        }
    });
}

SaveDB("Apna College")
.then((result)=>{
    console.log(result);
    console.log("Promise was resolved");  
    return SaveDB("Hello world");  
})
.catch((error)=>{
    console.log(error);
    console.log("Promise was rejected");
    return SaveDB("Hi");    
})