let people = [];
let continueInput = true;

while (continueInput) {
  enterPerson();
  let answer = prompt("Zelite li nastaviti unos osoba? y/n");
  continueInput = answer.toLowerCase() === "y";
}

let occupationStats = {};

people.forEach((person) => {
  if (!occupationStats[person.occupation]) {
    occupationStats[person.occupation] = {
      totalSalary: person.salary,
      numberOfPeople: 1,
    };
  } else {
    occupationStats[person.occupation].totalSalary += person.salary;
    occupationStats[person.occupation].numberOfPeople++;
  }
});

let sortedOccupations = Object.entries(occupationStats)
  .map(([occupation, stats]) => ({
    occupation,
    averageSalary: stats.totalSalary / stats.numberOfPeople,
    numberOfPeople: stats.numberOfPeople,
  }))
  .sort((a, b) => b.averageSalary - a.averageSalary);

console.log("Prosjecna placa po zanimanju");
sortedOccupations.forEach((item) => {
  console.log(
    `${item.occupation}: Prosjecna placa - ${item.averageSalary.toFixed(
      2
    )}, Broj ljudi - ${item.numberOfPeople}`
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
