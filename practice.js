let h1 = document.querySelector("h1");
function getcolor(color){
    return new Promise((resolve,reject)=>{
        let h1 = document.querySelector("h1");
        setTimeout(()=>{
            console.log("Color changed");
            h1.style.color=color;
            resolve("successed");
        },1000);
    });
}

async function num (){
    await getcolor("red");
    getcolor("blue");
}