let nums = [2,5,4,2,1,9,7];
let n =nums.reduce((res,el)=>{
    if(res<el){
        return el;
    }
    else{
        return res;
    }
  }
);

  //Maximum in an array :
 let maximum = [2,1,4,5].reduce((res,el)=> {
    if(res<el){
        return el;
    }
    else{
        return res;
    }
  }
);