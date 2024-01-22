// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <=0);
// the reason is that an equality check == and comparisions > < >= <= works differently.
// Comparision convert null to a Number, treating it as 0.
// Thats's why null>=0 is true and null>0 is false

 console.log(undefined == 0);
 console.log(undefined > 0);
 console.log(undefined < 0);

//  ==== strict check (also check data type)

console.log("2"===2);