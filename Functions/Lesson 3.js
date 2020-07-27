// A JavaScript closure is, very simply, any function that exists inside another function.
// A Closure is created when an inner function tries to access the scope chain of its outer function

let myName = "DaJuan"

const sayMyName = () => console.log(myName)

myName = "Zack"

sayMyName() // Zack


const adder = x => {
  return function addY(y){
    return x + y
  }
}

let addTen = adder(10)
let addFive =  adder(5)

let addTenToTwo = addTen(2)
let addFiveToThree = addFive(3)

console.log(addTenToTwo)
console.log(addFiveToThree)