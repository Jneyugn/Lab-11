//part 1
class ProductProperties {
    // Constructor method
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    // Method to display total value
    getTotalValue() {
        const totalValue = this.price * this.quantity;
        return totalValue; }
    //part 3 - static
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
        }
        const product = new ProductProperties('Apple', 2.50, 50);

        //part 2
class PerishableProductProperties extends ProductProperties {
    //constructor
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate; 
    }
        toString() {
            return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
        }
    }

    // part 4
    class Store {
        constructor() {
            this.inventory = []; 
        }

        addProduct(product) {
            this.inventory.push(product);
        }
        getInventoryValue() {
            return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
        }

        findProductByName(name) {
            const product = this.inventory.find(product => product.name === name);
            return product || null;
        }
    }

    const apple = new PerishableProductProperties('Apple', 2.50, 50, '2024-12-15');
const milk = new PerishableProductProperties('Milk', 1.50, 10, '2024-12-31');
const banana = new ProductProperties('Banana', 1.00, 100);
const cheese = new ProductProperties('Cheese', 2.00, 30);
const kiwi = new ProductProperties('Kiwi', 1.80, 40);

const store = new Store();

store.addProduct(apple);
store.addProduct(milk);
store.addProduct(banana);
store.addProduct(cheese);
store.addProduct(kiwi);

console.log("\nTotal Inventory Value Before Discount: $" + store.getInventoryValue());

ProductProperties.applyDiscount(store.inventory, 0.15);

console.log("\nTotal Inventory Value After 15% Discount: $" + store.getInventoryValue());

const searchedProduct = store.findProductByName('Apple');
if (searchedProduct) {
    console.log("\nProduct found: " + searchedProduct.toString());
} else {
    console.log("\nProduct not found.");
}

