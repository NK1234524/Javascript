const student = {
    Name : "Nishant",
    greet : function(){
        const arrowFunc=()=>{
            console.log("Good morning",this.Name);
        };
        arrowFunc();
    }
}
student.greet();