// stores/cartStore.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isOpen: false
  }),
  
  getters: {
    cartCount: (state) => state.items.length,
    cartTotal: (state) => {
      return state.items.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
    }
  },
  
  actions: {
    addItem(menuItem, quantity = 1) {
      // Check if item already exists in cart
      const existingItem = this.items.find(item => item.id === menuItem.id);
      
      if (existingItem) {
        // Increment quantity if item exists
        existingItem.quantity += quantity;
      } else {
        // Add new item with quantity
        this.items.push({
          id: menuItem.id,
          name: menuItem.name,
          price: menuItem.price,
          image: menuItem.image || '/placeholder-food.jpg', // Use a placeholder if no image
          quantity: quantity,
          subcategory: menuItem.subcategory,
          collectionId: menuItem.collectionId,
          // Add any other fields you need
        });
      }
    },
    
    removeItem(index) {
      this.items.splice(index, 1);
    },
    
    updateQuantity(index, quantity) {
      if (quantity <= 0) {
        this.removeItem(index);
      } else {
        this.items[index].quantity = quantity;
      }
    },
    
    toggleCart() {
      this.isOpen = !this.isOpen;
    },
    
    closeCart() {
      this.isOpen = false;
    },
    
    checkout() {
        // Create a WhatsApp message with cart details
        const phoneNumber = "+2349160443504"; // Replace with your restaurant's WhatsApp number
        
        // Format the cart as a message
        let message = "Hello! I'd like to place an order:\n\n";
        
        // Add each item to the message
        this.items.forEach(item => {
          message += `${item.quantity}x ${item.name} - ₦${(item.price * item.quantity).toFixed(2)}\n`;
        });
        
        // Add total
        message += `\nTotal: ₦${this.cartTotal}`;
        
        // Optional: Add customer details placeholder
        message += "\n\nDelivery Address: [PLEASE ADD YOUR ADDRESS]";
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Generate WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Close the cart
        this.closeCart();
      }
  }
})