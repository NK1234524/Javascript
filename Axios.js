let btn =  document.querySelector("button");
btn.addEventListener("click",async ()=>{
   let facts= await getfunc();
//    console.log(facts);
   let result = document.querySelector("p");
   result.innerText=facts;
})
let url="https://catfact.ninja/fact";

async function getfunc(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("Error - ",e);
        return "NO RETRURN";
    }
}