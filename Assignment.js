//problem 1
let arraya = [7,9,0,-2];
let n =3;
console.log(arraya.slice(0,n));

//problem 2
console.log(arraya.slice(-3));

//problem 3
let string = prompt("Enter the string here :");
if(string.length==0){
    console.log("Empty string");
}
else{
    console.log("Not a empty string");
}

//problem 4
let newname = "ApNAcollEge";
let index = 1;
if(newname[index]==newname[index].toLowerCase()){
    console.log("lowercase alphabet");
}
else{
    console.log("Not a lowercase alphabet");
}

//problem 5
let str = " Nishant Kumar ";
console.log(`The original string was${str}`);
console.log(`The new string ${str.trim()}`);

//problem 6
let element = 9;
if(arraya.indexOf(element)==1){
    console.log("Element exists");
}
else{
    console.log("Element does not exists");
}