let students = {
    Name:"Nishant",
    Class:"XII",
    RollNo:"34"
};

let Schools ={
    SchoolName:"MDPS",
    Location : "New delhi",
    Adress : "Rohini"

};

//Same as reference of arrays where the elements of an array becomes constant and cant be changed further
const Colors={
    Name : "Red",
    Intensity : "High",
    mixture : ["Red","white"]
};

//Get values
console.log("Name of the student ",students.Name);
console.log("Roll number of the student ",students["RollNo"]);//Another way to get.

//JS automatically converts the key other than strings into the strings.
let Students1 = {
    1 : "Nishant",
    true : "Prashant",
    null : "Rishant",
    undefined : "Eeshank"
};
console.log(Students1[1]); 
// console.log(Students1.1); will show error
console.log(Students1.true);
console.log(Students1.null);
console.log(Students1.undefined);
console.log(Students1["true"]);//true null and undefined can be accessed.
// It is not an index it is just a key which is a number here & converted to the string during get.object.
