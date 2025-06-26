let para1 = document.querySelector("p");
para1.innerHTML="Apna college <b>Delta<b> Practice";


let btn = document.createElement("button");
btn.setAttribute("id","my");
let para = document.querySelector("p");
btn.innerText="Click me!!";
para.appendChild(btn);

let heading = document.querySelector("h1");
heading.setAttribute("id","ir");
heading.innerText="DOM PRACTICE";
heading.style.color="purple";
heading.style.textDecoration="underline";

btn.style.backgroundColor="blue";
btn.style.color="white";

let text = document.createElement("input");
let id = document.querySelector("#inp");
text.placeholder="Username";
text.type="text";
id.appendChild(text);



