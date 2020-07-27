// Arrays are an order list of values that you refer to with a name and an index and they can be created in the following way
let arr = [3, "Hello World", true, undefined, null]

// You can access an element of an array with its index. Indexes start at 0
console.log(arr[1])

// To add or change an item by index, you can do
arr[0] = 4
arr[5] = 3.14

// Arrays are of type object, meaning that they have access to unique properties and methods
typeof arr // object

// To view the length of the array, we can use a property called length. The .length property returns the last index of the array + 1
console.log(arr.length)

// You can set the length of an array, and all indexes that are not defined will be empty
arr.length = 8
console.log(arr)

// Accessing each element by it's index manually is not efficient. We've already seen how useful loops are, and we can use loops to iterate over an array
// Instead of set the upper limit to be a random number, we can use the length of the array

let colors = ["red", "green", "blue"]
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}