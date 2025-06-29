heading = document.querySelector("h1");
function changeColor(color,delay,nextxolor){
   setTimeout(()=>{
    heading.style.color=color;
    if(nextxolor)nextxolor();        
},delay)};

changeColor("red",1000,()=>{
    changeColor("green",1050,()=>{
        changeColor("orange",1100);
    });
});