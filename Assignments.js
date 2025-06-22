Q1
const maxdice = prompt("Roll the dice:-");
const output = Math.floor(Math.random()*maxdice)+1;
console.log(`Output:-${output}`);

//Q2
    let Car = {
        Name:"Toyota",
        model:1123,
        color:"Red"
    }
    console.log(`Name:-${Car.Name}`);

//Q3
let Person = {
    Name:"Aditya",
    Age :34,
    City :"New Delhi"
}     
Person.City="New York";
Person.Country="United States of America";
console.log(`${Person}`);
