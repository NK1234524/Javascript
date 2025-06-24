let arr = [2,3,5,1,6];
let max = -1;
for(let i =0 ; i<arr.length ; i++){    
    if(max<arr[i]){        
        max=arr[i];        
    }        
};
console.log(max);