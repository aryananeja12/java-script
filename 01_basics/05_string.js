const name="Aryan" //declaration of string 
const repoCount = 50 //declaration of string

//console.log(name + repoCount + "Aneja");
// not used in modern days

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`aryan-aneja`) //another type of declaring string

console.log(gameName[0]);//a
console.log(gameName.__proto__); // to acccess prototype iske bina bhi krskte hain acess //{}


console.log(gameName.length); //11
console.log(gameName.toUpperCase()); //ARYAN-ANEJA
console.log(gameName);// [String: 'aryan-aneja']
console.log(gameName.charAt(4));//n
console.log(gameName.indexOf('r'));//1

const newString =gameName.substring(0,4) //end include nhi hota 
// can't se negative value
console.log(newString); //arya

const anotherString = gameName.slice(-8,11) //using -ve value will start from reverse
console.log(anotherString);

const newStringOne="         Aryan     "
console.log(newStringOne);//          Aryan
console.log(newStringOne.trim());//Aryan

const url ="https://aryan.com/aryan%20aneja"

console.log(url.replace('%20', '-')); //https://aryan.com/aryan-aneja

console.log(url.includes('aryan')); //true

console.log(gameName.split('-')); //[ 'aryan', 'aneja' ]