// 4a: Lägg till egenskaper med Spread Operator (2p)
// Skap en funktion addDiscount som tar emot två parametrar: ett produktobjekt och en rabattprocent.
// Funktionen ska returnera ett nytt objekt med discount som ny property.

const product = {
  name: "Laptop",
  price: 15000,
  brand: "TechBrand",
};

// Output: { name: "Laptop", price: 15000, brand: "TechBrand", discount: 10 }

function addDiscount(product, discount) {
  const discountedPrice = (product.price * (100 - discount)) / 100;

  // Skapa ett nytt objekt med uppdaterat pris
  return { ...product, discount: discount };
}

module.exports = addDiscount;

console.log(addDiscount(product, 10));
