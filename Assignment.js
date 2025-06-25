//Q1
let nums = [2,1,4,5];
const square = nums.map((num)=>num*num);
console.log(square);
let sum=square.reduce((a,b)=>a+b,0);
let avg = sum/nums.length;

//Q2
let number = [4,1,3,8];
const newarr = number.map((el)=>el+5);
console.log(newarr);

//Q3
let strings = ["hero","alam","suresh"];
const newstring = strings.map((str)=>str.toUpperCase());
console.log(newstring);

//Q4
function doubleAndargs(...args){
   let arr =  args.map((el)=>el);
    console.log(arr);
    let newarr = args.map((el)=>el*2);
    console.log(newarr);
}

//Q5