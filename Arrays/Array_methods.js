// Because arrays are of type object, they have access to properties and method that allow you to modify data or retrive information

//concat() joins two or more arrays
let myConcatArray =  ['1','2','3']
myConcatArray = myConcatArray.concat('a','b','c')
console.log(myConcatArray, "\n")

// join() will join all elements of an array into a string the argument passed between each element
let elements = ["Earth", "Wind", "Rain", "Fire"]
let elementString = elements.join(" - ")
console.log(elementString, "\n")

// push() adds one or more elements to the end of an array
let newArray = [1, 2, 3]
newArray.push(4,5)
console.log(newArray)

// pop() removes and returns the last element in an array
let last = newArray.pop()
console.log(last, newArray)

// unshift() adds one or more elements to the front of an array
newArray.unshift(-1, 0)
console.log(newArray)

// shift() removes and returns the first element in an array
let first = newArray.shift()
console.log(first, newArray)

// Another way to iterate over an array is through the use of for each loops
let colors = ["red", "green", "blue"]
colors.forEach(color => {
  console.log(color)
})

// You can also filter elements out of an array
let noRed = colors.filter(color => color !== "red")
console.log(noRed)

// Map allows you to modify elements and save them to a new array
let menu = ["Home", "About", "Work", "Services", "Contact"]
let navigation = menu && menu.map(item => `<li>${item}</li>`)
console.log(menu)
console.log(navigation)

// Reduce allows you excute a function on each element in an array that will result in a single output value
let ages = [20, 21, 18, 21, 19, 23, 24, 25, 20, 18]
let sumOfAgesUnder23 = ages.reduce((a, b) => {
  if (b < 23) { return  a + b}
  else return a + 0
},0)

console.log(sumOfAgesUnder23)

// More methods include actions to sort, slice, splice, find elements and other things