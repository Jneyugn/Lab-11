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
    };

    