let TODO=[];
let req = prompt("Enter your request here:").trim().toLowerCase();
while(true){
    if(req=="quit"){
        console.log("Quitting");
        break;
    }
    else if(req=="list"){
        console.log("-----------");
        for(let i =1 ;  i<TODO.length ; i++){           
            console.log(i,TODO[i]);
        }
        console.log("-----------");
    }
    else if(req=="add"){
        let task= prompt("Enter task here").trim().toLowerCase();
        TODO.push(task);
        console.log("Task Added");
    }
    else if(req=="delete"){
    let index = prompt("Enter the index here:").trim().toLowerCase();
        TODO.splice(index,1);
        console.log("Task deleted");
    }
    else{
        console.log("Please provide me the request for the options given below");
    }
    req =prompt("Enter your request here:").trim().toLowerCase();

}