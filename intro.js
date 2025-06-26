let btns  = document.querySelectorAll("button");

for(btnm of btns){
    btnm.onclick=print;
    btnm.onmouseenter=print1;
}
function print(){
    console.log("Cliked");
}
function print1(){
        console.log("Entered");
    };



