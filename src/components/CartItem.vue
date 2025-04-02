<template>
  <div v-if="product">

    <ProductCard :key="props.product.id" :product="props.product"/>
    <p>Quantity: {{ props.quantity }}</p>
    <p>item total: {{ props.product.price * quantity }}</p>
    <button @click="cartStore.removeFromCart(props.product.id)">Remove from cart</button>
  </div>
  <div v-else>
    <p>No product in the cart. Add some.</p>
  </div>
</template>

<script setup>

import ProductCard from "./ProductCard.vue";
import { useCartStore } from "../stores/cartStore.js";

const props = defineProps({
  product: {},
  quantity: null
})

const emit = defineEmits(["removeFromCart", "updateCart"]);

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>

</style>