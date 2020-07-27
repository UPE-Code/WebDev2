// Because functions can access bindings from the scope around it, this occurs even if that scope is no longer active.

let myName = "DaJuan"

const sayMyName = () => console.log(myName)

myName = "Zach"

sayMyName()


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