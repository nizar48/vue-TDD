<script setup>


const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["add-to-cart"]);

const addToCart = () => {
  emit("add-to-cart", props.product);
};
</script>

<template>
  <div class="border rounded-lg p-4 shadow-md">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded-md mb-2" />
    <h2 class="text-lg font-semibold">{{ product.name }}</h2>
    <p class="text-gray-700">${{ product.price.toFixed(2) }}</p>
    <p class="text-yellow-500">rating: {{ product.rating }}</p>
    <button
        @click="addToCart"
        class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    >
      Add to Cart
    </button>
  </div>
</template>
