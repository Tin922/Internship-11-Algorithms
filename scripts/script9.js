let names = [];
let continueInput = true;

while (continueInput) {
  enterName();
  let answer = prompt("Zelite li nastaviti unos imena? (y/n): ");
  continueInput = answer.toLowerCase() === "y";
}

names.sort((a, b) => a.localeCompare(b));
console.log(names.filter((name) => name.length > 5).join(", "));

function enterName() {
  let name = prompt("Upisite ime: ");
  names.push(name);
}
