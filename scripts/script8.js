const numbersArray = Array.from({ length: 100 }, (_, i) => i + 1);

const sum = numbersArray.reduce((total, number) => total + number, 0);
console.log(`Zbroj privih 100 prirodnih brojeva je: ${sum}`);
