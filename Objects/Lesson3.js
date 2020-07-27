// Rest operator packs leftover elements into an array
const classList = (...args) => {
  students = ""

  args.map((student, index) => {
    if (index == args.length - 1) students += `${student}.`
    else students += `${student}, `
  })
  return `We have ${args.length} students in our class they are ${students}`
}

console.log(classList("Rick", "James", "Lewis"))


const [firstName, ...otherNames] = ["Jeff", "Aaron", "Smith"]
console.log(firstName, otherNames)

// Spread operator unpacks an array
function sum(x, y, z) {
  return x + y + z
}

const numbers = [1, 2, 3, 4]
console.log(sum(...numbers))


const newNumbers = [...numbers, 5, 6, 7]
console.log(newNumbers)

const objectOne = {hello: "🤪"}
const objectTwo = {world: "🐻"}
const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}
console.log(objectThree)

// Destructuring allows you to unpack values from an array or object into variables
const colors = ['red', 'yellow', 'green'];
const [red, yellow, green] = colors;

console.log(red, yellow, green)

const user = {
  name: "DaJuan Harris",
  id: "324RT89J01"
}

let {name, id} = user
console.log(name, id)
// There is a lot that we can do with destructuring including unpacking values from objects into a function, chaging the name of a destructured value, and many more.