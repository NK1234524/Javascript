 let input = document.querySelector("input");
 input.addEventListener("change",(el)=>{
   let heading  = document.querySelector("h2");
   heading.innerText=input.value;
   console.log(heading);
    console.log(el);    
});  