heading = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            heading.style.color = color;
            resolve();
        },delay);
    }); 
}

changeColor("red",1000)
.then(()=>{
    console.log("Color changed to Orange");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("Color changed to green");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("Color changed to yellow");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("Color changed to brown");
    return changeColor("brown",1000);
})
    