<template>
  <div>
    <div v-if="cartItems.length === 0">
      <p>Empty Cart</p>
      <button>Continue Shopping</button>
    </div>
    <ul v-else>
      <li v-for="cartItem in cartItems" :key="cartItem.product.id">{{ cartItem.product.name }}</li>
    </ul>
    <div>Your Cart ({{ cartItems.length }} items)</div>
    <CartSummary/>

  </div>
</template>

<script setup>

import { useCartStore } from "../stores/cartStore.js";
import { computed } from "vue";
import CartSummary from "./CartSummary.vue";

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.items);

console.log("cart items: ", cartStore.items)

</script>

<style lang="scss" scoped>

</style>