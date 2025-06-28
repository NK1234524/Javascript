let button = document.querySelector("button");

button.addEventListener("click",(element)=>{
    console.log(element);
   let color= button.style.backgroundColor="green";//this is not used as it inherit from outer object.
   button.style.color="white";
   console.log(color);
    alert(`The color is ${color}`);
});
