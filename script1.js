let articles = [];
let continueInput = true;

while (continueInput) {
  enterArticle();
  let answer = prompt("Zelite li nastaviti unos proizovda? y/n");
  continueInput = answer.toLowerCase() === "y";
}

let totalPrice = articles.reduce((sum, article) => (sum += article.price), 0);
let averagePrice = totalPrice / articles.length;
let largestDeviationArticle = articles.reduce((max, article) =>
  Math.abs(article.price - averagePrice) > Math.abs(max.price - averagePrice)
    ? article
    : max
);

console.log("Prosjecna cijena proizovda je ", averagePrice);
console.log("Proizvod s najvecim odstupanjem od prosjeka:");
console.log("Ime:", largestDeviationArticle.name);
console.log("Cijena:", largestDeviationArticle.price);
console.log("Boja:", largestDeviationArticle.color);

function enterArticle() {
  let articleName = prompt("Upisite ime proizvoda");
  let articlePrice = prompt("Upisite cijenu proizvoda");
  let articleColor = prompt("Upisite boju proizvoda");

  articles.push({
    name: articleName,
    price: articlePrice,
    color: articleColor,
  });
}
