// function Declaration:
function add(a,b) {
    console.log(a+b);
}
add(100,200);

//function Expression:
const sub = function(a,b) {
    console.log(a-b)
}
sub(200, 100);

//arrow function:
const mul = (a, b)=>{
    console.log(a * b)
}
mul(10, 20)

const msg = ()=> "HEllo World";
let res = msg();
console.log(res);