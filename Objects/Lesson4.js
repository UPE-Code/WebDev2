// Prototypes and Classes

// Where does the toString method come from if I do not define it in the object. 
let empty = {}
console.log(empty.toString())

// Each object has a prototype that is another object that us used as a fallback soruce of properties
// This is simmilar to Java, where each object is inherited from object
console.log(empty.prototype)

// Because object prototypes show us that we can inherit from other objects, this means that Javascript has Classes (sort of)
// We've seen how objects can be created from constructor functions, but now there is an alternative notation using the class keyword
function person (name, age, favoriteBooks) {
  this.name = name
  this.age = age
  this.favoriteBooks = favoriteBooks
  this.birthday = function() {
    this.age += 1
    console.log(`Happy Birthday ${this.name}, you're ${this.age} years old`)
  }
}

const tim = new person("Tim", 23, ["War and Peace", "Game of Thrones", "Eloquent Javascript"])
tim.birthday()

class Person {
  constructor(name, age, favoriteBooks) {
    this.name = name
    this.age = age
    this.favoriteBooks = favoriteBooks
  }

  birthday() {
    this.age += 1
    console.log(`Happy Birthday ${this.name}, you're ${this.age} years old`)
  }
}

const rodger = new Person("Rodger", 27, ["War and Peace", "Game of Thrones", "Eloquent Javascript"])
rodger.birthday()

// You can inherit from other objects with the extend keyword.
class Teacher extends Person {
  constructor(name, age, favoriteBooks, school) {
    super(name, age, favoriteBooks)

    this.school = school
  }

  printMessage() {
    console.log(`My name is ${this.name}, and I teach at ${this.school}. My favorite books are ${this.favoriteBooks}`)
  }
}

const jim = new Teacher("Jim", 45, ["War and Peace", "Game of Thrones", "Eloquent Javascript"], "Florida International University")
jim.printMessage()