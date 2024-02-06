let athletes = [];
let continueInput = true;

while (continueInput) {
  enterAthlete();
  let answer = prompt("Zelite li nastaviti unos sportasa? (y/n): ");
  continueInput = answer.toLowerCase() === "y";
}

athletes.sort((a, b) => a.lastName.localeCompare(b.lastName));

let categories = {
  category25: [],
  category50: [],
  category75: [],
  category100: [],
};

athletes.forEach((athlete) => {
  let percentage = (athlete.points / athlete.maxPoints) * 100;

  if (percentage <= 25) {
    categories.category25.push(athlete);
  } else if (percentage <= 50) {
    categories.category50.push(athlete);
  } else if (percentage <= 75) {
    categories.category75.push(athlete);
  } else {
    categories.category100.push(athlete);
  }
});

function printCategory(category, categoryName) {
  console.log(`Kategorija ${categoryName}:`);
  category.forEach((athlete) => {
    console.log(`${athlete.lastName} ${athlete.firstName}`);
  });
}

printCategory(categories.category25, "0-25%");
printCategory(categories.category50, "25-50%");
printCategory(categories.category75, "50-75%");
printCategory(categories.category100, "75-100%");

function enterAthlete() {
  let firstName = prompt("Upisite ime sportasa: ");
  let lastName = prompt("Upisite prezime sportasa: ");
  let points = parseFloat(prompt("Upisite broj osvojenih bodova sportasa: "));
  let maxPoints = parseFloat(prompt("Upisite maksimalan broj bodova: "));

  athletes.push({
    firstName,
    lastName,
    points,
    maxPoints,
  });
}
