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

//Q4
let n=5;
let fact = 1;
for(let i =1 ; i<=n ; i++){
    fact=fact*i;
}
console.log(fact);

//Q5
let array = [1,2,-4,5,8];
let largest=0;
for(let i=0 ; i<array.length ; i++){
    if((array[i]>largest)&&(array[i]>0)){
        largest = array[i];
    }
}
console.log(largest);
