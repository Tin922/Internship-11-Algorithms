let fruits = [];
let continueInput = true;

while (continueInput) {
  enterFruit();
  let answer = prompt("Zelite li nastaviti unos voca? (y/n): ");
  continueInput = answer.toLowerCase() === "y";
}
const availableFruits = [];
const unavailableFruits = [];
fruits.forEach((fruit, index) => {
  if (fruit.availability.toLowerCase() == "da") availableFruits.push(fruit);
  else {
    console.log(`${fruit.name} je nedostupno i index je ${index}`);
    unavailableFruits.push(fruit);
  }
});

availableFruits.sort((a, b) => {
  if (a.name !== b.name) {
    return a.name.localeCompare(b.name);
  }
  return a.price - b.price;
});
console.log("Dostupna voca su");
availableFruits.forEach((fruit) =>
  console.log(`Ime voca je ${fruit.name} i cijena je ${fruit.price}`)
);

const unavailableFruitsPrice = unavailableFruits.reduce(
  (sum, fruit) => sum + fruit.price,
  0
);
const availableFruitsPrice = availableFruits.reduce(
  (sum, fruit) => sum + fruit.price,
  0
);
const fruitsPrice = fruits.reduce((sum, fruit) => sum + fruit.price, 0);

console.log(
  `Nedostupno voce doprinosi ${(
    (unavailableFruitsPrice / fruitsPrice) *
    100
  ).toFixed(2)}% ukupne cijene`
);

function enterFruit() {
  let name = prompt("Upisite ime voca: ");
  let price = parseFloat(prompt("Upisite cijenu voca: "));
  let availability = prompt("Je li proizvod dostupan? (da/ne): ");

  fruits.push({
    name,
    price,
    availability,
  });
}
