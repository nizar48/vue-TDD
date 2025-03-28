<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  currentSort: String,
});

const emit = defineEmits(["sort-change"]);

const sortOptions = [
  {label: "Select an option", value: ""},
  {label: "Price: Low to High", value: "price-asc"},
  {label: "Price: High to Low", value: "price-desc"},
  {label: "Rating: High to Low", value: "rating-desc"},
];

const handleSortChange = (event) => {
  emit("sort-change", event.target.value);
};
</script>

<template>
  <div class="container">
    <label for="sort">Filter by price/rating:</label>
    <select
        id="sort"
        :value="currentSort"
        data-test="sort-select"
        @click="handleSortChange"
    >
      <option
          v-for="option in sortOptions"
          :key="option.value"
          :value="option.value"
          :selected="currentSort === option.value"
          data-test="sort-option"
          :class="{ active: currentSort === option.value }"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
select {
  margin-left: 20px;
  cursor: pointer;
  padding: 10px;
  width: 320px;
  font-size: 16px;
}

option.active {
  font-weight: bold;
}

.container {
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>
