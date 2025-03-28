<template>
  <ProductFilter @category-change="handleCategoryChange" @search-change="handleSearchChange" :categories="categories"/>
  <ProductSort @sort-change="handleSortChange"/>
  <div v-if="filteredProducts.length === 0">
    No products found.
  </div>
  <div v-else class="grid">
    <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product"/>
  </div>

</template>

<script setup>

import ProductFilter from "./ProductFilter.vue";
import { useProductStore } from "../stores/productStore.js";
import { computed } from "vue";
import ProductCard from "./ProductCard.vue";
import ProductSort from "./ProductSort.vue";


const store = useProductStore()

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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
</style>
