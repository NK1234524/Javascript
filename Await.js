function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

function getnum1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num1 = Math.floor(Math.random()*10)+2;
            console.log(num1);
            reject();
        },1000);
    });
}


async function demo(){
    await getnum();
    getnum1();  

}