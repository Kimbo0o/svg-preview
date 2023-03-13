<template>
  <div class="flex items-center gap-1">
    <label for="scale" class="text-sm text-defaultDark dark:text-defaultLight"
      >Scale</label
    >
    <input
      id="scale"
      type="range"
      min="0"
      max="1"
      step="0.01"
      v-model="store.singleImageScale"
      class="appearance-none h-1 p-0 bg-defaultDark dark:bg-defaultLight rounded outline-none [&::-webkit-slider-thumb]:bg-defaultDark dark:[&::-webkit-slider-thumb]:bg-defaultLight slider"
    />
  </div>
</template>

<script setup lang="ts">
// #region imports
import { useMainStore } from "../stores/mainStore";
// #endregion

// #region component setup
const store = useMainStore();
// #endregion
</script>

<style scoped>
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}
</style>
