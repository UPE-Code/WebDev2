// The most common way to create an object is with an object initializer
const myCar = {
  make: 'Tesla',
  model: 'Roadster',
  year: '2024'
}

// To access properties, you can use dot notation
console.log(myCar.make) // Tesla

// You can also access properties using bracket notation
console.log(myCar["model"]) // Roadster

// Properties not assigned are undefined
// console.log(car1.color) undefined

// Using a constructor function
// The this keyword is bound to the object that calls it
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year
}

const car1 = new Car("BMW", "i3", "2021")
const car2 = new Car("Kia", "Sorento", 2019)



// Methods are object properties that have functions as values
const restaurant = {
  name: "Chipotle",
  guestCapacity: 20,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  }
}

console.log(restaurant.checkAvailability(4))

// There are two other shorthands for adding methods to objects
const book = {
  title: "Game of Thrones",
  author: "George RR. Martin",
  reviews: 100,
  addToReviews(numOfNewReviews) {
    this.reviews += numOfNewReviews
    console.log(this.reviews)
    console.log(this)
  }
}

book.addToReviews(10)

// You can also use arrow functions, but because arrow functions bind the this key differently from other functions, it's not recomended.
age = 0
const person = {
  name: "James",
  age: 20,
  birthday: () => {
    console.log("Happy Birthday to You.")
    console.log(this)
  }
}

person.birthday()
console.log(person.age)