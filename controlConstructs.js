// if-else(): 
var age = 19;
if (age > 18) {
    console.log('Age iis greater than 18');
}  else {
    console.log('Age is not greater than 18'); 
}

// switch():
let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default:
        console.log("Just another day.");        
}

//forLoop():
for (var i = 0; i<=10; i++) {
    console.log(i);
}

//whileLoop():
let count = 1;
while (count <= 5) {
    console.log("Count is:", count);
    count++;
}

//doWhileLoop():
let number = 1;

do {
    console.log("Number:", number);
    number++;
} while (number <= 3);

//forOfLoop():
var arr = [100, 200, 300, 400]
for (var i of arr) {
    console.log(i);
}

//forInLoop(): returns the index of each item.
var arr1 = ['Aishu', 'Pooja', 'Bhagya', 'Likhita']
for (var i in arr1) {
    console.log(i);
}

//forEachLoop():
var arr3 = [10, 20, 30, 40]
arr3.forEach((ele,index, complete_array)=>{ 
       console.log(ele, index, complete_array);
})

//
for (let i = 1; i<= 3; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
//1, 2, when i is 3 terminate the loop

for (var i = 1; i<= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

