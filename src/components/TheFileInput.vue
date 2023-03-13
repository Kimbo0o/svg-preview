<template>
  <input
    type="file"
    class="hidden"
    id="fileInput"
    accept=".svg"
    multiple
    @change="onHandleInputChange"
  />
</template>

<script setup lang="ts">
// #region imports
import { useMainStore } from "../stores/mainStore";
// #endregion

// #region component setup
const store = useMainStore();

const onHandleInputChange = (event: Event) => {
  const eventTarget = event.target as
    | (EventTarget & {
        files: FileList;
      })
    | null;
  if (eventTarget?.files) {
    for (const file of eventTarget.files) {
      store.handleNewFile(file);
    }
  }
};
// #endregion
</script>
