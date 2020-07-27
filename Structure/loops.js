// Loops Allow us to repeat things

// For Loop
for (let i = 1; i <= 10; i++) {
  console.log(`${i} squared is ${i ** 2}`);
}
console.log("\n");

// While Loop
let counter = 0;
while (counter < 10) {
  if (counter % 2 === 0) {
    console.log(`${counter} is even`);
  } else {
    console.log(`${counter} is odd`);
  }

  counter++;
}
console.log("\n");

// Breaking out of a loop
let x = 10;
while (true) {
  if (x % 7 === 0) {
    console.log(x);
    break;
  }
  x++;
}

// Skipping an iteration
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(` ${i} is odd`);
}

// Do While Loop
let error = true;

do {
  console.log("There are no errors");
} while (!error);

console.log("\n");
