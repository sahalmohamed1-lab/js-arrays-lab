// Write your code here
let products = ["Laptop", "Phone", "Headphone", "Monitor" ]

function logFirstProduct() {
  console.log(products[0]);
}
console.log(products[0]);

function addProduct() {
  addProduct;
}
products.push("Earphone")
console.log(products);

function updateProductName(_index, _productName) {
  updateProductName;
}
products[4] = "Charger"
console.log(products);

function removeLastProduct() {
  removeLastProduct;
}
products.pop()
console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
