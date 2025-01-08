add(10, 20); //NaN
add(10, 20, 30); //NaN
add(10, 20, 30, 40); //100

function add(a, b) {
    console.log(a+b);
}

function add(a, b, c) {
    console.log(a+b+c);
}

function add(a, b, c, d) {
    console.log(a+b+c+d);
}