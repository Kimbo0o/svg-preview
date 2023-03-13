<template>
  <TheSingleFileOutput v-if="store.currentFiles.length === 1" />
  <TheMultiFileOutput v-else-if="store.currentFiles.length > 1" />
</template>

<script setup lang="ts">
// #region imports

import { useMainStore } from "../stores/mainStore";
import TheMultiFileOutput from "./TheMultiFileOutput.vue";
import TheSingleFileOutput from "./TheSingleFileOutput.vue";
// #endregion

// #region component setup
const store = useMainStore();
// #endregion
</script>
