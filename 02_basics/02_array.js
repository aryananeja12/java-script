const marvelHeros= ["thor","ironman","spiderman"]
const dcHeros= ["superman", "flash", "batman"]

marvelHeros.push(dcHeros) //ismein array ko bhi ek element leliya

console.log(marvelHeros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelHeros[3]); //[ 'superman', 'flash', 'batman' ]

const allHeros = marvelHeros.concat(dcHeros) //new array mein add krdiya
console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros] //arrays ko spread krta

console.log(allNewHeros);

const anotherArray =[1, 2, 3, [4, 5, 5], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity) //infinity mein daalna hain kitni depth //saare arrays ko ek mein krta hain
console.log(realAnotherArray); // 1, 2, 3, 4, 5, 5, 7, 6, 7, 4, 5



console.log(Array.isArray("aryan")); //array hain ya nhi //false
console.log(Array.from("aryan")); //convert krdenga array mein
//[ 'a', 'r', 'y', 'a', 'n' ]

console.log(Array.from({name: "aryan"})); //construct array from array like object
//jb array nhi bnaa paata to empty array //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //represent new array from set of elements //
