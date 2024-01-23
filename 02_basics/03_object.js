// singleton : jb constructor se object bnaate hain toh
Object.create
// ojbect literals


const mySym = Symbol("key1") //decalring symbol

const jsUser ={
    name: "Aryan",
    age: 20,
    "full name":"Aryan Aneja",
    [mySym]: "mykey1",
    location:"Haryana",
    email:"aryan@google.com",
    isLoggedIn:false,
    LastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]); //sqaure bracket mein krte hain symbol ko nhi to string maanta hain js use

jsUser.email ="aryan@chatGpt.com" // values ko change krne ke liye
//Object.freeze(jsUser) //agr kisi ko lock krna ho mtlb change na ho
jsUser.email = "aryan@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`); //agr same object ko reference krna hain to likh skte hain this
}

console.log(jsUser.greeting());  //hello JS user
console.log(jsUser.greetingTwo()); //hello JS user, Aryan

