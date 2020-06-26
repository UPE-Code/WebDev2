// Conditonal statements allow us to introduce decisions into our program

// if
let num = 10
if (num > 5) {
  console.log(`${num} is greater than 5\n`)
}

// if / else
let temp = 100
if (temp >= 18 && temp <= 90) {
  console.log('Get Outside')
} else {
  console.log('Stay inside')
}
console.log("\n")

// ternary
let greaterThan10 = 12 > 10 ? "yes" : "no"
console.log(greaterThan10)
console.log("\n")

// Nesting
let insuranceAge = 19
let insurance = 149.99

if (insuranceAge > 18) {
  if (insurance >= 100) {
    console.log("You qualify for a discount")
  } else {
    console.log("You do not qualify for a discount")
  }
} else {
  console.log("You are too young to have insurance")
}
console.log("\n")

// else if
let age = 26
let isChild = age <= 7
let isSenior = age >= 65

if(isChild) {
  console.log("Welcome! You eat free.")
} else if (isSenior) {
  console.log("Welcome! You eat at a discount")
} else {
  console.log("Welcome!")
}

console.log("\n")

// switch
let weather = "rainy"

switch(weather) {
  case "rainy":
    console.log("Remember to bring an umbrella")
    break
  case "sunny":
    console.log("Dress lightly")
    break
  case "cloudy":
    console.log("Possible chance of rain")
    break
  default:
    console.log("You didn't enter a weather type")
}

console.log("\n")