const score =400 

const balance = new Number(100); 
console.log(balance); //[Number: 100]
console.log(score); //400

console.log(typeof balance.toString()); //string
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNumber =23.8966

console.log(otherNumber.toPrecision(4)); //23.90 (it is in string)

const hundreds =1000000
console.log(hundreds.toLocaleString());  //1,000,000 //in american number sytem
console.log(hundreds.toLocaleString('en-IN')); //10,00,000  //in Indian Number System 

// ******************************Maths *******************

console.log(Math);
console.log(Math.abs(-4)); // 4( -ve ko +ve krta hain)
console.log(Math.round(4.6)); // 5(round off)
console.log(Math.ceil(4.2)); //5 (usse thodi bhi zyada to usse upr ki lenga)
console.log(Math.floor(4.9)); //4 (jitni zyada ho wohi value lenga)
console.log(Math.min(4,5,6,8,10)); //4 (array mein sbse chhoti value)
console.log(Math.max(4,6,8,10,3)); //10(array mein sbse bdhi value)

console.log(Math.random()); //range (0-1)
console.log(Math.round(Math.random()*10) +1); //any randome integer value

const min =10
const max =20

console.log(Math.floor(Math.random() *(max - min +1)) +min); //formula ****important