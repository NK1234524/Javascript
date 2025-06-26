let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h1 =  document.querySelector("h1");
    let box = document.querySelector("#n");
    let Randomcolor = RGB();
    h1.innerText=Randomcolor;
    h1.style.color=Randomcolor;
    box.style.backgroundColor=Randomcolor;

    alert(`Color changed to ${Randomcolor}`);
    console.log("Color changed");
});


function RGB(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);

    let rgb = `rgb(${red},${blue},${green})`;
    return rgb;
};