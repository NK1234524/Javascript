//foreach 
const arr = [
    {
        Name:"Nishat",
        marks :34
    },

    {
        Name : "Prashant",
        marks : 32
    }

];


arr.forEach(element => {
    console.log(element.marks);    
  }
);

let arr1 =  [ 2,3,4];

//Map and filter

let double  = arr1.map(function(el){
    return el*el;
});

let first = arr1.filter(function(el){
    return el%2==0;
});

//Every & some
let con = [3,2,1].every((el)=>el%2==0);
console.log(con);//AND 

let so = [3,2,1].some((el)=>el%2==0);
console.log(so);//OR

//Reduce
let gh = [3,2,1].reduce((residue,el)=> (residue+el));
console.log(gh);

