const add = (...aish)=> {
    let res = aish.reduce((acc, ele) => acc * ele,1);
    console.log('Result is: ', res);
}
add();    // aish = []
add(10, 20);  // aish = [10, 20]
add(10, 20, 30);  // aish = [10, 20, 30]


function mul(...aish) {
     let res = aish.reduce((acc,ele) => acc * ele,1);
     console.log('Multiplication is: ', res);
}
mul(); //1
mul(10, 20);  // 200
mul(10, 20, 30, 40, 14, 2);  //6720000