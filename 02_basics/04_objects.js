const tinderUser = new Object()

tinderUser.id ="123abc"
tinderUser.name = "Aryan"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullName:{
        userFullName:{
            firstName: "Aryan",
            lastName: "Aneja"
        }
    }
}

console.log(regularUser);

const obj1 ={1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
//console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } //don't use

const obj3 =Object.assign({}, obj1, obj2) //object ko combine krne ke liye
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = {...obj1, ...obj2} //array spread waala concept mostly use
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users =[ //object in array
    {
        id: 1,
        email: "aryan@gmail.com"
    },
    {
        id: 1,
        email: "arya@gmail.com"
    },
    {
        id: 1,
        email: "ryan@gmail.com"
    }
]

 console.log(users[1].email); // arya@gmail.com
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //will get keys
// [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser)); //[ '123abc', 'Aryan', false ]

console.log(Object.entries(tinderUser)); //hr ek entry ko ek array mein bnaadete hain //[ [ 'id', '123abc' ], [ 'name', 'Aryan' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //dekhne ke liye ki iss object pe yeh hain ya nhi //true

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor //itni baar yeh na likhna pdhe isliye neeche waala
// const {courseInstructor } =course //decalaration 
const {courseInstructor : Instructor} =course //destructure short name

console.log(Instructor) //Hitesh

{                    //json api in format of object
    "name":"hitesh",
    "cousename": "js in hindi",
    "price" :"free"
}

[
{},  //json api in format of array
{},
{}
]