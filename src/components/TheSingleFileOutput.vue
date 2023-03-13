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
      :title="title"
    />
  </div>
</template>

<script setup lang="ts">
// #region imports
import { ref, computed } from "vue";
import { useMainStore } from "../stores/mainStore";
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

const title = computed(() => {
  return `${store.currentFiles[0].source.name}, ${singleImage.value?.naturalWidth}x${singleImage.value?.naturalHeight}`;
});
// #endregion
</script>
