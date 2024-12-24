//Functions Declaration: Hoisted
function greet(name) {
    return `Hello, ${name}`
}
console.log(greet1('Aishu'))

//Function Expression: Not Hoisted
let greet2 = function(name) {
    return `Hello,${name}`
}
console.log(greet2('Vishu'))

//Arrow Function: Callbacks
{name}=> {
    return `Hello,${name}`
}
console.log(greet3('Ashu'))