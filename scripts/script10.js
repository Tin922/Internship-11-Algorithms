let fruits = [];
let continueInput = true;

while (continueInput) {
  enterFruit();
  let answer = prompt("Zelite li nastaviti unos voca? y/n: ");
  continueInput = answer.toLowerCase() === "y";
}

let minPrices = {};

fruits.forEach((fruit) => {
  if (!minPrices[fruit.color] || fruit.price < minPrices[fruit.color]) {
    minPrices[fruit.color] = fruit.price;
  }
});

let totalPrice = Object.values(minPrices).reduce(
  (total, price) => total + price,
  0
);

console.log("Ukupna cijena:", totalPrice);

fruits.sort((a, b) => a.name.length - b.name.length);

console.log("Kupljeni proizvodi:");
fruits.forEach((fruit) => {
  console.log(`${fruit.name} - ${fruit.color} - ${fruit.price} cijena`);
});

function enterFruit() {
  let name = prompt("Upisite ime voca: ");
  let color = prompt("Upisite boju voca: ");
  let price = askForNumber();

  fruits.push({
    name,
    color,
    price,
  });
}

function askForNumber() {
  let userInput;
  do {
    userInput = prompt("Upisite cijenu voca: ");
  } while (
    userInput === null ||
    userInput.trim() === "" ||
    isNaN(userInput) ||
    parseFloat(userInput) <= 0
  );

  return parseFloat(userInput);
}
