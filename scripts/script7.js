let fruits = [];
let continueInput = true;

while (continueInput) {
  enterFruit();
  let answer = prompt("Zelite li nastaviti unos voca? (y/n): ");
  continueInput = answer.toLowerCase() === "y";
}
const coloredFruits = fruits.map((fruit) => ({
  name: fruit.name,
  color: fruit.availability.toLowerCase() === "da" ? "crvena" : "žuta",
}));

coloredFruits.sort((a, b) => {
  if (a.color !== b.color) {
    return a.color.localeCompare(b.color);
  }
  return a.name.localeCompare(b.name);
});
coloredFruits.forEach((fruit) =>
  console.log(`Ime: ${fruit.name}, Boja: ${fruit.color}`)
);

function enterFruit() {
  let name = prompt("Upisite ime voca: ");
  let availability = prompt("Je li proizvod dostupan? (da/ne): ");

  fruits.push({
    name,
    availability,
  });
}
