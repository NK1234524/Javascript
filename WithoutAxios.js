let url = "https://catfact.ninja/fact";
let button = document.querySelector("button");
button.addEventListener("click",()=>{
    let para = document.querySelector("p");   
 fetch(url)
.then((res)=>{
    return res.json();
})
.then((data1)=>{    
    para.innerText = data1.fact;    
})
.catch((e)=>{
    console.log("Error is : ",e);
    return "No output";
})
});
