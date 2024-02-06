let fruits = [];
let continueInput = true;

while (continueInput) {
  enterFruit();
  let answer = prompt("Zelite li nastaviti unos voca? y/n: ");
  continueInput = answer.toLowerCase() === "y";
}

fruits.sort((a, b) => a.color.localeCompare(b.color));

let currentColor = null;
let totalCalories = 0;

fruits.forEach((fruit) => {
  if (currentColor !== fruit.color) {
    if (currentColor !== null) {
      console.log(`Ukupno kalorija za boju ${currentColor}: ${totalCalories}`);
      totalCalories = 0;
    }

    currentColor = fruit.color;

    console.log(`Voće sa bojom ${currentColor}:`);
  }

  totalCalories += fruit.calories;
  console.log(`${fruit.name} - ${fruit.calories} kalorija`);
});

console.log(`Ukupno kalorija za boju ${currentColor}: ${totalCalories}`);

function enterFruit() {
  let name = prompt("Upisite ime voca: ");
  let color = prompt("Upisite boju voca: ");
  let calories = askForNumber();

  fruits.push({
    name,
    color,
    calories,
  });
}

function askForNumber() {
  let userInput;
  do {
    userInput = prompt("Upisite kalorije voca: ");
  } while (
    userInput === null ||
    userInput.trim() === "" ||
    isNaN(userInput) ||
    parseFloat(userInput) <= 0
  );

  return parseFloat(userInput);
}
