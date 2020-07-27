
// Even though primatives by deffinition are types that are not objects, and you can still use methods and properties on them
// String Methods and properties

let name = 'DaJuan Harris'

// Length  property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

let password = '1234Password'

// Includes method
console.log(password.includes('12345'))

// Repeat Method
let repeated = '*'.repeat(10)
console.log(repeated)

// Number Methods

let total = 69.420

// Convert number to a fixed number of decimal places 
console.log(total.toFixed(2))

/*
  How are we able to use methods on primative types
    Javascript wraps the value in a Wrapper class representative of the type
    Performs and returns whatever is needed from the method
    Destroys the wrapper class
*/