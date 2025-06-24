function sum(...args){
     for(let i=0 ; i<args.length ; i++){
        console.log("This is ",args[i]);
     }
}

function count(max,...args){
    console.log(max);
    return args.reduce((max,el)=>{
        if(el>max){
            return el;
        }
        else{
            return max;
        }
    });
};
function sum(...args){
    
   return  args.reduce((add,el)=>add+el);
}