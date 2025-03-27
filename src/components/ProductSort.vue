<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  currentSort: String,
});

const emit = defineEmits(["sort-change"]);

const sortOptions = [
  {label: "Price: Low to High", value: "price-asc"},
  {label: "Price: High to Low", value: "price-desc"},
  {label: "Rating: High to Low", value: "rating-desc"},
];

const handleSortChange = (event) => {
  emit("sort-change", event.target.value);
};
</script>

<template>
  <div>
    <label for="sort">Sort By:</label>
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
  cursor: pointer;
}

option.active {
  font-weight: bold;
}
</style>
