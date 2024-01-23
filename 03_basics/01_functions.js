// function :jo bhi aapka code hain usko ek bag mein bnd krdiya hain woh
// package jitni baar jhaa mrji copy utthake le ja skte hain

function sayMyName() {  //function:keyword
  console.log("H");    // sayMyName:function name
  console.log("I");         // (){}:function syntax
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

sayMyName()  //call by reference

//function addTwoNumber(number1, number2){   //(number1,  number2): Parameters
//    console.log(number1 + number2);
//}

//const result = addTwoNumber(3,4) //(3,4):argument //7
// console.log("Result:", result); //undefine
//***dont use above */

function addTwoNumber(number1, number2){
    
    //let result = number1 + number2
    //return result

    return number1+number2 //we can also do that

    console.log("Aryan"); //yeh kaam ni krenga kyunki return ke baad koii function kaam ni krta
}

const result =addTwoNumber(3,5)

console.log("Result:", result); //Result:8


function logInUserMessage(username ="sam"){
    return `${username} just logged in`
}

console.log(logInUserMessage("Aryan")) //Aryan just logged in //sam overwrite hogaya
console.log(logInUserMessage()); //empty hain to sam aayenga

function calculateCartPrice(...num1){  //rest operator //array mein daaldenga jitni mrji arguments
    return num1
}

console.log(calculateCartPrice(200,400,500));

const user ={
    username:"Aryan",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
 handleObject({
    username: "sam",
    price:399
 })


 const myNewArray =[200,400,600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

//  console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200,800,600])); //800
