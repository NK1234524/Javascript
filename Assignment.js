const average=(Ist , IInd ,IIIrd)=>{
    return (Ist+IIIrd+IInd)/3;
}

const even = (n)=>{
    if(n%2==0){
        return "even";
    }
    try{
    return odd;}
    catch{
        console.log("Odd");
    }    
}


const object={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
    
};
    
setTimeout(object.logMessage,1000);