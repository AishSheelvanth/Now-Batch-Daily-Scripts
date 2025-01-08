// 1. argumnets object cannot be used with arrow functions:
// 2. arguments object cannot be used wiht filter, map, reduce, forEach

const add = ()=> {
    let res = 0;
    for (var i = 0; i<arguments.length; i++) {
        res = res + arguments[i];
    }
    console.log('Addition Result is: ', res);
}
add();
add(10, 20);
add(10, 20, 30);