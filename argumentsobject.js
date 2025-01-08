//function add() {
  //  console.log('Inside add Function')
//}
//console.log(add);

//add();
//add('Hello');
//add(10, 20, 30, 40); // output will be the the print itself!



//creating multiple functions with the same name but diff number of parameters:
//function add() {
  //  console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
//}

//add(); // undefined undefined undefined         ---> arguments = []
//add(10);  //10 undefined undefined              ---> arguments = [10]
//add(10, 20); // 10, 20, undefined               ---> arguments = [10, 20]
//add(10, 20, 30);  // 10, 20, 30                 ---> arguments = [10, 20, 30]
//add(10, 20, 'Aish', 25);  // 10, 20, Aish, 25   ---> arguments = [10, 20, Aish, 25]

/* function mul() ---> Multiple parameters:
if mul(a, b) ---> a*b
if mul(a, b, c) ---> a*b*c
mul(a, b, c, d) ---> a*b*c*d
if mul function have more than 4 agruments or less than 2 display an error msg:
Multiplication cannopt be performed
*/

//function mul() {
  //  if(arguments.length === 2) {
    //    console.log(`Multiplication of ${arguments[0]}
     //   and ${arguments[1]} is:` ,arguments[0]*arguments[1]);
    //}
    //else if (arguments.length === 3) {
      //  console.log(`Multiplication of ${arguments[0]}, ${arguments[1]}
        //and ${arguments[2]} is:` ,arguments[0]*arguments[1]*arguments[2]);
    //}
   // else if (arguments.length === 4) {
     //   console.log(`Multiplication of ${arguments[0]}, ${arguments[1]}, ${arguments[2]}
       // and ${arguments[3]} is:` ,arguments[0]*arguments[1]*arguments[2]*arguments[3]);
    //}
    //else {
      //  console.log('Invalid number of arguments...!!!');
  //}
//}

//mul();               // Invalid number of arguments...!!!
//mul(10, 20);         // 200
//mul(10, 20, 30);     // 6000
//mul(10, 20, 30, 40); // 240000

function mul() {
    let res = 1;
    for (let i=0; i<arguments.length; i++) {
        res = res * arguments[i];
    }
        console.log('Multiplication Result is: ', res);
}

mul();        // Multiplication REsult is : 1
mul(10, 20);  // 200