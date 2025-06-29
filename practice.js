heading = document.querySelector("h1");

function changecolor(color,delay,nextcolor){
     setTimeout(() => {
        heading.style.color=color;    
        
        if(nextcolor)nextcolor();
    },delay);
}

changecolor("red",1000,()=>{
    changecolor("green",2000,()=>{
        changecolor("orange",3000,()=>{
            changecolor("black",4000);
        });
    });
});

