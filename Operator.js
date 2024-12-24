console.log(10+20);
console.log(20-10);
console.log(10*20);
console.log(20%10);
console.log(2**2);  //square
var a = 10;
console.log(a++);
console.log(a);
console.log(++a);

// == Checks only value not data type:
console.log(10 == 10); //true
console.log(10 == '10'); //true

// === Checks Value and Data Type Both
console.log(10 === '10');//false : Values are matching but not data type
console.log(10 == 10);//true

// logical && || and !
console.log(true && true);//true
console.log(true || false); //true
console.log(!true);//false

//Ternary Operator:
console.log((10 == '10' ? 'Equal by Value': 'Not Equal by Value'));