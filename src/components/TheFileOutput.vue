<template>
  <div v-if="store.currentFiles.length === 1">
    <TheSingleFileOutput />
  </div>
</template>

<script setup lang="ts">
// #region imports

import { useMainStore } from "../stores/mainStore";
import TheSingleFileOutput from "./TheSingleFileOutput.vue";
// #endregion

// #region component setup
const store = useMainStore();
// #endregion
</script>
