// Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime.

// x is visible anywhere in the program because it is in the global scope
let x = 10

if(true) {
  // y is only visible in this block
  let y = 20
  // z is visible anywhere because it uses the var keyword
  var z = 30
  console.log(x + y + z) // 60
}

console.log(x) // 10
console.log(z) // 30
// console.log(y) results in error

// Scope doesn't just affect bindings, but it can also affect functions

const hummus = factor => {
  const ingredient = (amount, unit, name) => {
    let ingredientAmount = amount * factor
    if (ingredientAmount > 1 ) { unit += "s"}

    console.log(`${ingredientAmount} ${unit} of ${name}`)
  }

  ingredient(1, "can", "chickpeas")
  ingredient(0.25, "cup", "tahini")
  ingredient(0.25, "cup", "lemon juice")
  ingredient(1, "clove", "garlic")
  ingredient(1, "tablespoon", "olive oil")
  ingredient(1, "teaspoon", "cumin")
}

hummus(3)