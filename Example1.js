// NOTE to remember.
// The VAR is function-scoped, so redeclaring X inside the if statement modifies its value globally.
//LET and CONST variables are block-scoped, so redeclaring y and z inside the blocks creates separate variables with the same names but different values.


//VAR
var x = 10;
if (true) {
  var x = 20;
  console.log(x); // Outputs 20
}
console.log(x); // Outputs 20

//LET
let y = 30;
if (true) {
  let y = 40;
  console.log(y); // Outputs 40
}
console.log(y); // Outputs 30

//CONST
const z = 50;
if (true) {
  const z = 60;
  console.log(z); // Outputs 60
}
console.log(z); // Outputs 50
