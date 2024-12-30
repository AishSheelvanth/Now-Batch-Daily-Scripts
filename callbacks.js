var array = [10, 11, 12, 13, 14]
array.forEach((ele, idx, arr)=>console.log(ele, idx, arr));   // ele - element, idx - index, arr - array

console.log(array.filter((ele)=>ele %2 === 0)); // [10, 12  14]

console.log(array.map((ele)=>ele * ele));  // [100, 121, 144, 169, 196]

console.log(array.reduce((acc, ele)=>acc + ele, 0)); // 60 (acc - accumalation)
