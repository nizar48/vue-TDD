<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  categories: Array,
  selectedCategory: Number,
});

const emit = defineEmits(["category-change", "search-change"]);

const handleCategoryClick = (categoryId) => {
  emit("category-change", categoryId);
};

const handleSearchInput = (event) => {
  emit("search-change", event.target.value);
};
</script>

<template>
  <div>
    <input type="text" @input="handleSearchInput"/>
    <ul>
      <li>
        <button
            data-test="category-option"
            @click="handleCategoryClick(null)"
        >
          All Categories
        </button>
      </li>
      <li v-for="category in categories" :key="category.id">
        <button
            data-test="category-option"
            @click="handleCategoryClick(category.id)"
        >
          {{ category.name }}
        </button>
      </li>
    </ul>
  </div>
</template>
