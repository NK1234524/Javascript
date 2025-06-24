//Q1
let number = [ 2,1,4,3,5,6,8,7];
number.reduce((res,el)=>{
    if(el%10==0){
        console.log("It is divisible");
    }
    else{
        console.log("It is not divisible");
    }
});

//Q2
let minnumber = number.reduce((res,el)=>{
    if(res<el){
        return res;
    }
    else{
        return el;
    }
});

//spread
console.log(...number);

//spread array literals
let num = [1,4,2,3,5];
let newn = [...num];

//spread object literals
const numnext = {
    Name :"n",
    number : 2,
};
let next = {...numnext , j:34 ,country :"India"};   
let next1 = {numnext , j:34 ,country :"India"};   