// Write your code here
const products = ["Laptop", "Phone", "Headphone", "Monitor" ];

function logFirstProduct(products) {
  console.log(products[0]);
}
logFirstProduct(products[0]);
console.log(products[0]);

function addProduct(products, productName) {
  products.push(productName);
  return products;
}
addProduct = products.push("Charger");
console.log(products);

function updateProductName(products, index, newName) {
  products[index] = newName;
  return products;
}
updateProductName(products[4] = "Earphones");
console.log(products);

function removeLastProduct(products) {
  products.pop();
  return products;
}
removeLastProduct(products);
console.log(products);

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
