let people = [];
let continueInput = true;

while (continueInput) {
  enterPerson();
  let answer = prompt("Zelite li nastaviti unos osoba? (y/n): ");
  continueInput = answer.toLowerCase() === "y";
}

let totalSalary = people.reduce((sum, person) => sum + person.salary, 0);

let occupationPercentage = {};
people.forEach((person) => {
  occupationPercentage[person.occupation] =
    (occupationPercentage[person.occupation] || 0) +
    person.salary / totalSalary;
});

let peoplePercentage = {};
people.forEach((person) => {
  let percentage = (person.salary / totalSalary) * 100;
  peoplePercentage[person.name] = { name: person.name, percentage };
});

console.log("Zbroj svih plaća:", totalSalary);
console.log("Postotak koliko svako zanimanje pridonosi ukupnoj plaći:");
Object.entries(occupationPercentage).forEach(([occupation, percentage]) => {
  console.log(`${occupation}: ${percentage * 100}%`);
});

console.log("Postotak koliko svaka osoba pridonosi ukupnoj plaći zanimanja:");
people.forEach((person) => {
  let percentage = (person.salary / totalSalary) * 100;
  console.log(
    `${person.firstName} ${person.lastName}: ${percentage.toFixed(2)}%`
  );
});

function enterPerson() {
  let firstName = prompt("Upisite ime osobe: ");
  let lastName = prompt("Upisite prezime osobe: ");
  let occupation = prompt("Upisite zanimanje osobe: ");
  let salary = parseFloat(prompt("Upisite placu: "));

  people.push({
    firstName,
    lastName,
    occupation,
    salary,
  });
}
