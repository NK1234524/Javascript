let number =10;
for(let  i =1 ; i<=number ;i++){
    console.log(`${i}`);
}

//Nested loops
for(let i = 0 ; i<3 ; i++){
    for(let j= 0 ; j<3 ; j++){
        console.log(`The output ${j}`);
    }
}

//While loop
let number1 = 1 ;
while(number1<=5){
    console.log(`${number1}`);
    number1++;
}

//Arrays loop
let fruits = ["mango", "apple","banana","litchi","orange"];
fruits.push("Guava");
for(let i = 0 ; i<fruits.length ; i++){
console.log(`For ${i} index value the fruit element is ${fruits[i]} `);    
}
for(let m = fruits.length-1 ; m>=0 ; m--){
    console.log(`For ${m} index value the fruit element is ${fruits[m]} `);    
}

//Nested loops in Nested array
let heroes = [["Superman","Batman","Thunderstorm"],["Spiderman","Captain America","Iron Man"]];
for(let i = 0; i<heroes.length;i++){
    console.log(`List ${i}`);
    for(let j = 0 ; j<heroes[i].length ; j++){
        console.log(heroes[i][j]);
    }
}

//for-of loops
let heroes1 = ["Superman","Batman","Thunderstorm"];
for(heroes of heroes1){    
    console.log(heroes);
}

//for-of-loops in nested array
let planets = [["Earth","Uranus","Pluto"],["Mars","Mercury","Venus"],["Pendora","Saturn","Jupiter"]];
for(lists of planets){
    console.log(lists);
    for(all of lists){
        console.log(all);
    }
}
