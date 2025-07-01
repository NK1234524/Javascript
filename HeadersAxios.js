let url = "https://icanhazdadjoke.com/";

let button =  document.querySelector("button");
button.addEventListener("click",async ()=>{
    let para =  document.querySelector("p");
    let joke = await getjokes();
    para.innerText = joke;    
});

async function getjokes(){
    try{
        const config = {headers:{Accept:"application/json"}};
        let res = await axios.get(url,config);
        // console.log(res.data);
        return res.data.joke;
    }
    catch(err){
        console.log(err);
        return "No";
    }
}
