let array=["Nishant", "Kumar","Jha"];
console.log(array);
//indexOf():Used to find the index of the given element.
console.log(array.indexOf("Kumar"));//returns 1;
console.log(array.indexOf("Kum"));//returns -1;

//includes(): to search the element is present in the array or not.
console.log(array.includes("Kumar"));//returns true
console.log(array.includes("Kumr"));//returns false

//concat
let newArray = ["jharkhand","Bihar","Chattisgarh"];
console.log(array.concat(newArray));

//reverse
console.log(newArray.reverse());

//slice
console.log(newArray.slice(2));//move from start
console.log(newArray.slice(-2));//move from last

//splice
console.log(array.splice(1,0,"Prashant"));//used to add a new element as Si = 1 & Ei =0 means a new space is gnerated.
console.log(array);

//sorting
console.log(array.sort());

//Array reference
let array1 = array;
array1.push("c");
console.log(array1);
console.log(array);

//Constant array
const ne=[1,2,3,4];
let me =ne;
console.log(me);

//2D Aarray & Multidimentional array
let matrix = [[1,2],[3,4],[5,6]];
console.log(matrix);
let m = matrix[1];
console.log(m);
let n = matrix[1][1];
console.log(n);
matrix.push([7,8]);
console.log(matrix);






