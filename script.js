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
        console.log(`Product Name: ${this.name}, Quantity: ${this.quantity}, Total Value = $${totalValue}`);
    }
        }
        const product = new ProductProperties('Apple', 2.50, 50);

        product.getTotalValue();

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

    const apple = new PerishableProductProperties('Apple', 2.50, 50, '2024-12-15');
    const milk = new PerishableProductProperties('Milk', 1.50, 10, '2024-12-31');

    console.log(apple.toString());
    console.log(milk.toString());