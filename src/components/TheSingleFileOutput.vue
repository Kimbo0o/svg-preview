<template>
  <div class="w-full h-full flex items-center justify-center">
    <img
      :src="store.currentFiles[0].objectUrl"
      ref="singleImage"
      @load="onSingleImageLoad"
      :style="{
        width: store.singleImageWidth,
        height: store.singleImageHeight,
      }"
      class="border rounded border-defaultDark dark:border-defaultLight"
    />
  </div>
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
