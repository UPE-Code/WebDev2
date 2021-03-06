// Variables allow us to keep track of values by assigning them to a unique name
// Javascript provides us with three keywoars to create variables

// var: The oldest keyword, but is not used as often now.
var studentName = "Tony"
var studentGPA = 3.3
var studentAge = 21
var studentEnrolled = true
console.log(`${studentName} is ${studentAge} and has a ${studentGPA} GPA\n`)

// let: Introduced in ECMAScript 2015, the diffrence between it and var has to do with scoping
let customer = "waluigi"
let amountOwed = 420.69
let discount = 0.30
let newAmount = amountOwed - (amountOwed * discount)
console.log(`${customer} owes ${newAmount}\n`)

// Because Javascript is dynamically typed, variables can change their type whenever necessary
let x = 3
console.log(typeof x + "\n")

x = "hello"
console.log(typeof x + "\n")

// const: Also introduced in ECMAScript 2015, const variables allow the developer to set a variable that will never change
const TAX = 0.07
console.log(TAX)
// If I try to change it, I will get an error
TAX = 0.06
