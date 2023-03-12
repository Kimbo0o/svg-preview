<template>
  <img
    class="w-8 h-8"
    :src="store.currentFiles[0].objectUrl"
    ref="singleImage"
    @load="onSingleImageLoad"
  />
</template>

<script setup lang="ts">
// #region imports
import { useMainStore } from "../stores/mainStore";
import { ref } from "vue";
// #endregion

// #region component setup
const store = useMainStore();

const singleImage = ref<HTMLImageElement | null>(null);

const onSingleImageLoad = () => {
  if (singleImage.value) {
    store.initSingleImageSize(
      singleImage.value.naturalWidth,
      singleImage.value.naturalHeight
    );
  }
};
// #endregion
</script>
