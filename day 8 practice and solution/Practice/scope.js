//scope.js

a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = "solutions by satyawan2" // this is a global scope variable and found in the window object

function letsLearnScope()
 {
  console.log(a, b)
   
}
console.log(a, b) // accessible

function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }