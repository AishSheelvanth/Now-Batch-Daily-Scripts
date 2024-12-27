let arr1 = [10, 20, 30, 40, 50]
for (var i = 0; i<= arr1.length; i++) {
  console.log('At index:', i, 'Element is:', arr1[i]);
}


// Incrementation, condition check, ++/-- Not required
arr1.forEach(function(element, index) {
       console.log(element, index);
} );


//filter(), map(), reduce()

let numbers = [11, 22, 33, 44, 55, 66]
let even = []
for (var i = 0; i<= numbers.length; i++) {
    if (numbers[i] %2 === 0) {
        even.push(numbers[i])
    }
}

console.log('Even Array is:', even); // [22, 44, 66]


//filter();
let odd = numbers.filter((ele)=> ele%2 !==0 )
console.log('Odd Elements are:' , odd); // [11, 33, 55]


//WAP to to find and print all even numbers from n array
//WAP to find and add all odd elements from an array into new array.
//WAP to find sum of all elements present in an array.
//WAP to find Product of all elements present in an array.
//WAP to find add +5 to each element of an array and print it.
//WAP to find square of each element present in an array


