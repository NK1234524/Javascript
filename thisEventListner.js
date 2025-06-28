let btn  = document.querySelector("button");
let para = document.querySelector("p");
let heading = document.querySelector("h3");

function print(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}   
btn.addEventListener("click",print);
para.addEventListener("click",print);
heading.addEventListener("click",print);