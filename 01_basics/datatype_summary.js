// # Primitive(call by value)

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score=100
const scoreValue=100.3
// Number

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// because Symbols are unique thats why they are false

const bigNumber=44233442344234n //bigInt

//  # Refrence(Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"] //array
{
    name:"aryan";// object
    age:22;//object
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp); //null ka type typeof mein object aata hain





// ++++++++++++++++++++++

// Stack (Primitive) 
//copy milta hain mtlb jo bhi change hoga copy mein hoga change

let myYoutubename="AryanAneja"

let anotherName = myYoutubename
anotherName="Aryan"

console.log(myYoutubename);//AryanAneja
console.log(anotherName);//Aryan



// Heap(Non -Primitive)
// refrence milta hain mtlb jo bhi change honga orignal mein honga change

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "aryan@google.com"

console.log(userOne.email);//aryan@google.com
console.log(userTwo.email);//aryan@google.com