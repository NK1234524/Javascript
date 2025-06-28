let btn = document.querySelector("button");
let inp = document.querySelector("#5");
let newbtn = document.querySelector("form");

function print(event){
    console.log(event);
    console.log("clicked");
}

function print1(event1){
    console.log(event1);
    console.log("Key = ",event1.key);
    console.log("Code = ",event1.code);
    console.log("Key pressed");   
}


function newprint(el){
    el.preventDefault();
    console.log(el);
}

newbtn.addEventListener("submit",newprint);
inp.addEventListener("keydown",print1);
btn.addEventListener("click",print);

