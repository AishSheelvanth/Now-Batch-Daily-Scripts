var arr1 = [10, 50.45, true, 'Kod', {name: 'Aish' , age : 21}, ()=>{console.log('Function')}, (100, 200)]
console.log('The length of arr1 array:',arr1.length);

for (var i=0; i<=arr1.length-1; i++) {
    console.log(`Element at at index ${i}` , arr1[i]);
}

//console.log(arr1, typeof arr1);

// Array can store Homogeneous(data with same data types) as well s Heterogeneous (data with fidd data types) 
//console.log('Element at 0th index:',arr1[0]);
//console.log('Element at 1st index:',arr1[1]);
//console.log('Element at 2nd index:',arr1[2]);
//console.log('Element at 3rd index:',arr1[3]);
