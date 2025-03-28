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
  <div class="card">
    <img :src="product.image" :alt="product.name"/>
    <h2>{{ product.name }} <span class="rating">{{ product.rating }}</span></h2>
    <div class="card-body">
      <div class="card-section">
        <p class="price">${{ product.price.toFixed(2) }}</p>
      </div>
      <button
          class="cta-button"
          @click="addToCart"
      >
        Add to Cart
      </button>

    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 450px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  padding: 16px;
  border-radius: 10px;
}

.cta-button {
  background-color: #1b1b1b;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  height: 2.5rem;
  cursor: pointer;
}

.cta-button:focus {
  outline: 2px solid cornflowerblue;
}

.cta-button:hover {
  opacity: 0.9;
}

.card-section {
  padding: 16px 0;
  column-gap: 64px;
}

.card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: 32px;
  font-weight: bold;
}

.rating {
  background-color: gold;
  font-size: 16px;
  padding: 4px;
  border-radius: 6px;
}

</style>