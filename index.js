class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    calculateTotal() {
      let total = 0;
      this.items.forEach(item => {
        total += item.product.price * item.quantity;
      });
      return total;
    }
  
    displayCart() {
      console.log("Shopping Cart:");
      this.items.forEach(item => {
        console.log(`${item.product.name} - Quantity: ${item.quantity}`);
      });
      console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
    }
  }
  
  // Here's the sample products
  const laptop = new Product("Hp omen 15", 599.99);
  const phone = new Product("Samsung Galaxy S24", 299.99);
  const headphones = new Product("AirPods pro 3", 149.99);
  
  // This is the main application
  const shoppingCart = new ShoppingCart();
  
  // Simulate adding items to the cart
  shoppingCart.addItem(laptop, 1);
  shoppingCart.addItem(phone, 1);
  shoppingCart.addItem(headphones, 2);
  
  // Display the shopping cart
  shoppingCart.displayCart();
  