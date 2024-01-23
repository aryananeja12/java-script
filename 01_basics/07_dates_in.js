// Dates 
//control + space se recommendation khuljenga

let myDate = new Date()
console.log(myDate); //2024-01-22T19:38:06.330Z
console.log(myDate.toString());//Mon Jan 22 2024 19:39:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//Mon Jan 22 2024 
console.log(myDate.toISOString())//2024-01-22T19:41:24.788Z
console.log(myDate.toJSON())//2024-01-22T19:41:24.788Z
console.log(myDate.toLocaleDateString()) //1/22/2024
console.log(myDate.toLocaleString())//1/22/2024, 7:41:24 PM
console.log(typeof myDate); //object 

// let myCreatedDate = new Date(2023, 0, 23, 5 ,3)
// console.log(myCreatedDate.toLocaleString());// 1/23/2023, 5:03:00 AM
let myCreatedDate = new Date("01-14-2023")
//let DateNumberTwo = new Date("01-14-2023")
//console.log(DateNumberTwo.toLocaleString()); //1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
 
console.log(myTimeStamp); //value in milliseconds
console.log(myCreatedDate.getTime()); //milliseconds mein miljengi value
console.log(Math.floor(Date.now()/1000)); //in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());


console.log(`${newDate.getDate()} and the time ${newDate.getTime()}`);

console.log(newDate.toLocaleString('default', {//default:internationalization
    weekday:"long",//object,
    timeZone:'Asia/Kolkata', //India timezone
    hour:"2-digit",
}));