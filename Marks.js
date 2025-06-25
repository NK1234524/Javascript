let marks=89;
if(marks>=33){
    console.log("Pass");
    if(marks<=50 && marks>33){
        console.log("3rd Division");
    }
    if(marks<=75 && marks>50){
        console.log("2nd Division");
    }
    if(marks<=100 && marks>75){
        console.log("1st Division");
    }
}
else{
    console.log("FAILED");
}