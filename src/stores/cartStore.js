import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        items: [],
    }),

    getters: {
        totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),

        subtotal: (state) => state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),

        tax() {
            return +(this.subtotal * 0.08).toFixed(2);
        },

        grandTotal() {
            return +(this.subtotal + this.tax).toFixed(2);
        },
    },
    

    actions: {
        addToCart(product) {
            const existingItem = this.items.find((item) => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push({product, quantity: 1});
            }
        },

        updateQuantity(productId, quantity) {
            const item = this.items.find((item) => item.product.id === productId);
            if (item) item.quantity = quantity;
        },

        removeFromCart(productId) {
            this.items = this.items.filter((item) => item.product.id !== productId);
        },

        clearCart() {
            this.items = [];
        },
    },
});
