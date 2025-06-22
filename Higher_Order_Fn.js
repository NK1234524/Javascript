function Recite(func,count){//Higher order Function.
    for(let i =1;i<=count;i++){
        func();//It is a kind of Fn which is used also as a parameter
    }
}

let greet =function(){
    console.log("Hello");
}
Recite(greet,3);