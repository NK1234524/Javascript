// Q1
const number = 5;
let array = [1,5,2,6,8,9];
function getnumber(array , number){
 for(let i =0 ; i<array.length;i++){
    if(number<array[i]){
        console.log(array[i]);
    }
  }
}

//Q2
function getans(str){
let ans="";
for(let i =0 ; i<str.length;i++){
    let currentchar = str[i];
    if(ans.indexOf(currentchar)==-1){
        ans+=currentchar;
    }
  }
  console.log(ans);
}

//Q3
let country = ["Australia","Germeny","United states of America"];
let length1 = country[0];
for(let i =1; i<country.length;i++){    
    if(length1.length < country[i].length){
        length1=country[i];
    }    
}
console.log(length1);


//Q4
function vowelCountstr(str){
let vowelCount=0;
for(let i = 0 ; i<str.length ; i++){
    let ch = str[i];
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
        vowelCount+=1;
    }
}
console.log(vowelCount);
}

//Q5
function RandomNumbers(start ,  end){
    diff = end-start;   
        let no =Math.floor((Math.random()*diff));
        if(no>=start && no<=end){
        console.log(no);
    }
}
    