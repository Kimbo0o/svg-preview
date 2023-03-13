<template>
  <ul class="grid grid-cols-3 gap-4">
    <li v-for="file in store.currentFiles" :key="file.key">
      <MultiFileOutputSingle :file="file" />
    </li>
  </ul>
</template>

<script setup lang="ts">
// #region imports
import { useMainStore } from "../stores/mainStore";
import MultiFileOutputSingle from "./MultiFileOutputSingle.vue";
// #endregion

// #region component setup
const store = useMainStore();
// #endregion
</script>
