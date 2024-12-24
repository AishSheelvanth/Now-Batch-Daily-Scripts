// 4 Types of functions:

// 1. Functions without input and without return:
function add() {
    var a = 10;
    var b = 20;
    console.log("Addition is: ", a+b);
}
add();

// 2. Functions with input and without return:
function sub(x, y) {
    console.log("Subtraction is: ", x-y);
}
sub(200, 100);

// 3. Functions without input and with return:
function mul() {
    var p = 300;
    var q = 100;
    return p * q;
}
let result = mul();
console.log("Multiplication is: ", result);

// 4. Functions with input and with return:
function div(a, b) {
    return a/b;
}
console.log("The division is: ", div(500/10));