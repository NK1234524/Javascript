let btn = document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListner("click",Say1);
    btn.addEventListner("mouseenter",Say2);
}

function Say1(){
    console.log("Clicked");
}

function Say2(){
    console.log("Entered");
}