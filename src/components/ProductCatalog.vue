<template>

  <div class="product-control">
    <ProductFilter @category-change="handleCategoryChange" @search-change="handleSearchChange"
                   :categories="categories"/>
    <ProductSort @sort-change="handleSortChange"/>
  </div>
  <div v-if="filteredProducts.length === 0">
    No products found.
  </div>

  <div v-else class="grid">
    <ProductCard @add-to-cart="cartStore.addToCart(product)" v-for="product in filteredProducts" :key="product.id"
                 :product="product"/>
  </div>

</template>

<script setup>

import ProductFilter from "./ProductFilter.vue";
import { useProductStore } from "../stores/productStore.js";
import { computed } from "vue";
import ProductCard from "./ProductCard.vue";
import ProductSort from "./ProductSort.vue";
import { useCartStore } from "../stores/cartStore.js";


const store = useProductStore()

const cartStore = useCartStore()

const filteredProducts = computed(() => store.filteredProducts)

const categories = computed(() => store.categories || "");

const handleCategoryChange = (category) => {
  store.setCategory(category)
}

const handleSearchChange = query => {
  store.setSearchQuery(query)
}

const handleSortChange = (sortOption) => {
  store.setSortOption(sortOption)
}


</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
}


.product-control {
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  margin-bottom: 40px;
}
</style>
