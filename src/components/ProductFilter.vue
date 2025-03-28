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
  <div class="container">
    <input class="search_input" placeholder="Type your search here.." type="text" @input="handleSearchInput"/>
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


<style scoped>
.search_input {
  width: 70%;
  margin-right: 30px;
  padding: 0 10px;
}

.container {
  display: flex;
}

ul {
  display: flex;
  width: 100%;
  justify-content: end;
  column-gap: 25px;
}

li {
  list-style: none;

  button {
    cursor: pointer;
    padding: 8px 16px;
  }
}
</style>