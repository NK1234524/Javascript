let url = "https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
  
    return res.json();
})
.then((data)=>{
    console.log("Data 1 ",data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data1)=>{
    console.log("Data 2 ",data1.fact );
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("Data3 is ",data2.fact);
    return fetch(url);
})
.catch((err)=>{
    console.log("ERR ",err);
});

console.log("All the data is mentioned below from the request API as below");