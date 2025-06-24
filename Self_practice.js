function numbers(...args){
    return args.reduce((before,after)=>before+after);
}

function numbers(maxm,...args){
      console.log(`maximum is ${maxm}`);
     return args.reduce((maxm,next)=>  {
     
        if(next>maxm){
            return next;
        }
        else{
            return maxm;
        }
    } 
    );    
}

function numbers(min , ...args){
    console.log(min);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    });
}

function multiplication(no,...args){
    console.log(no);
    return args.reduce((no, el)=>{
        return no*el;
    });
}