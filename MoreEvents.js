let form = document.querySelector("form");
form.addEventListener("submit",(el)=>{
    el.preventDefault();
});

let user =  document.querySelector("#user");
user.addEventListener("change",()=>{
    console.log("Change event");
    console.log(user.value);    
});

let input = document.querySelector("#pass");
input.addEventListener("input",()=>{
    console.log("Input");
    console.log(input.value);
})