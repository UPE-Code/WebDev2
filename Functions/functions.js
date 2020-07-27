// Functions allow us to write reusable, modular code

function sayHello() {
  console.log('Hello')
}

sayHello()

// Function can accept parameters
function convertTemp(celsius) {
  const fahrenheit = (celsius * (9/5)) +32
  console.log(fahrenheit)
}

convertTemp(100)

// You can create default parameters
function sayHello2(name = "") {
  if (name !== "") {
    console.log(`Hello, ${name}!`)
  } else {
    console.log("Hello")
  }
}

sayHello2()
sayHello2("DaJuan")

// You can return data from functions for later use
function halve(n) {
  return n / 2
}

let halfOfFour =  halve(4)
console.log(`Half of 4 is ${halfOfFour}`)

let halfOfTwenty = halve(20)
console.log(`Half of 20 is ${halfOfTwenty}`)


// Arrow Functions
const factorial = num => {
  let result = 1
  for(let i = num; i > 0; i--) {
    result *= i
  }

  return result
}
let factorialOfTwo = factorial(2)
let factorialOfEight = factorial(8)

console.log(factorialOfTwo)
console.log(factorialOfEight)