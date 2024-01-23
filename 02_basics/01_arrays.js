// array

const myArray =[0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"]

const myArray2 = new Array(0, 1, 2, 3, 4)
console.log(myArray[1]);

//Array methods

myArray.push(6) //add krne ke liye hota hain element ko array mein
myArray.push(7)
myArray.pop(); //last element ko delete 

myArray.unshift(9) //starting mein add hojaata hain
myArray.shift() //first element remove hojaata hain

console.log(myArray.includes(9)); //false
console.log(myArray.indexOf(10)); //-1
console.log(myArray.indexOf(3)); //3

const newArray =myArray.join(); //add all element into a string

console.log(typeof newArray); //string
console.log(myArray); //0,1,2,3,4,5,6

//*******slice, splice */

console.log("A", myArray); //0,1,2,3,4,5,6

const myn1 = myArray.slice(1, 3) //copy of data ko manipulate krta hian

console.log(myn1); // 1,2
console.log("B", myArray); //0,1,2,3,4,5,6

const myn2 = myArray.splice(1, 3) //original ko manipulate krta hain
console.log("C", myArray); //0,4,5,6
console.log(myn2); //1,2,3



