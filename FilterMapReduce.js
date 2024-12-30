var arr1 = [10, 11, 12, 13, 14, 15]
var newArr = arr1.filter((ele)=>ele%2===0);
 // if (ele%2 === 0) {
   //  return ele;
  //}
//})
console.log('Original Array:', arr1);
console.log('Even Array: ', newArr); 

function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
} 


const years = [1996, 2000, 1997, 1994];
years.forEach(year => {
    if (isLeapYear(year)) {
        console.log(`${year} is a leap year.`);
  } else {
        console.log(`${year} is not a leap year.`);
  }
});


// array.map (function(ele){})
array = [1, 2, 3, 4, 5, 6]
var sq_arr = array.map((ele)=>ele*ele);

//var sq_arr = array.map(function(ele){
//    return ele * ele;
//})
console.log('Orginal Array:', array);
console.log('Square Array:', sq_arr);


//reduce(function(acc, ele) {code})
var array = [1, 2, 3, 4]
//var sum = 0
//for (var i=0; i<=array.length-1; i++) {
  //  sum = sum + array[i];
//} 
//console.log(sum);
//var sum = array.reduce(function(acc, ele) {
  //  return ele + acc;
//}, 0);
//console.log('Sum is:', sum);
var product = array.reduce((acc, ele)=>acc * ele, 1);
var sum = array.reduce((acc, ele)=>acc + ele, 0);
console.log('Sum is:', sum);
console.log('Product is:', product);
