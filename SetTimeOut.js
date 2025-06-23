console.log("Hi there");
setTimeout(()=>{
    console.log("Welcome to Apna college");
},5000)
console.log("Welcome here");

let id = setInterval(()=>{
    console.log("Hi everyone");
},5000);

clearInterval(id); //clear the setInterval fn application.