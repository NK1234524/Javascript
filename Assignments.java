//Q1
let arr=[1,2,3,4,5,6,2,3];
let num = 2;
for(let i =0 ; i<arr.length ; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);

//Q2
let number = 287152;
let count =number.toString().length ; 
console.log(count);

//Q3
let number1 = "287152";
let sum  =0;
for(let i =0 ; i<number1.length ; i++){    
    sum+=parseInt(number1[i]);       
}
console.log(sum); 
