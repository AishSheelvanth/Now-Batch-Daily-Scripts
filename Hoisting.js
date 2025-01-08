// console.log(a); //Error
// const a = 30; //At the time of memory allocatin tgis a will be in TDZ but at the time of code
//Execution this will be assigned with 30

// console.log(a);  // 30
// console.log(b);  //Error
// let b = 60;
// console.log(b); //60
// console.log(c);
// var c = 40; // undefined
// console.log(d); // Error


//We have used function declaration:
//Global Scope (Which is not present in any block)
add()
sub()
function sub() {
    // console.log(x+y); Cannot access 'x' before initialization
    let x = 40;
    var y = 50;
    console.log(x+y); //90
}
function add() {
    console.log(a+b); // NaN
    var a = 50;
    var b = 60;
    console.log(a+b); // 110
}