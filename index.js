console.log("zai");


/*window.alert("IT IS AN ALERTTT");

document.getElementById("try").textContent="kya horha";
document.getElementById("yes").textContent="chsgbjaxnlZMK";



let age= 19;
let name= "zai";
console.log(typeof age);
console.log("my name is ${name}");


document.getElementById("p1").textContent="why";

document.getElementById("p2").textContent="okkkkkkkkkk thats my name ${name}"
let students=30;
students= students/5;
console.log(students);

num=70;
num /=10;
console.log(num);

let username = window.prompt("Whats your username:");
console.log(username);*/


document.getElementById("submit").onclick=function(){
   username=document.getElementById("text").ariaValueMax;
   document.getElementById("h1").textContent= 'abort';



}


let age =24;

let message =age >=18 ? "you can drive" : "you cant"
console.log( message)

let pamt=99;
let discount =pamt>= 100? 10 :0;

console.log('your total is  $ ${pamt - pamt*(discount/100)} ' )


//switches

let day=3;

switch(day){
   case 1:
      console.log("monday");
      break;
      case 2:
         console.log("tuesday");
         break;
      case 3:
         console.log("wednesday");
         break;   
      default:
         console.log("invalid day");   
}

let score=95;
let grade;
switch(true){
   case score>=90:
      grade='A';
      break;
   case score>=70:
    grade="B";  
    break;
   case score>=35:
      garde='C';
      break;
   default:
      grade='F';           

}
console.log('your grade is ${grade}');

//let email=iamzaira2@gmail.com;


//method chaining: combine with a doy

//let username=window.prompt("enter username:")

//username= username.trim().charAt(0).toUpperCase()+ username.trim().slice(1).toLowerCase();
//console.log(username);  

let fruits=["apple", "orange", "banana","coco"]

//fruits.pop();  //removes last
//fruits.push("kiwi"); //adds to end
//fruits.unshift("mango"); //adds to start
//fruits.shift(); //removes first
fruits.sort().reverse(); 
console.log(fruits.length);
console.log(fruits.indexOf("orange"));
console.log(fruits);


//spread operator ... unpack

let num=[1,2,3,4,5];
let name="zaira";
let user=[...name].join("-");
let max=Math.max(...num);

console.log(max);
console.log(...name);
console.log(...user);



