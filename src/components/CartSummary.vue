<template>
  <div>
    <h2>Cart Summary</h2>
    <div>
      <span>Subtotal:</span>
      <span>{{ formattedSubtotal }}</span>
    </div>
    <div>
      <span>Tax (8%):</span>
      <span>{{ formattedTax }}</span>
    </div>
    <div>
      <span>Grand Total:</span>
      <span>{{ formattedGrandTotal }}</span>
    </div>
    <button>
      Checkout
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/cartStore.js";
import { computed } from "vue";

const cartStore = useCartStore();

const formattedSubtotal = computed(() => `$${ cartStore.subtotal.toFixed(2) }`);
const formattedTax = computed(() => `$${ cartStore.tax.toFixed(2) }`);
const formattedGrandTotal = computed(() => `$${ cartStore.grandTotal.toFixed(2) }`);
</script>