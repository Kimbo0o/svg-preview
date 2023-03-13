<template>
  <div class="flex flex-col items-center justify-center">
    <img
      ref="imageEl"
      class="border rounded border-defaultDark dark:border-defaultLight"
      :src="props.file.objectUrl"
      @load="onImageLoaded"
    />
    <div class="mt-2 text-defaultDark dark:text-defaultLight text-xs">
      {{ props.file.source.name }}, {{ sizeInfo }}
    </div>
  </div>
</template>

<script setup lang="ts">
// #region imports
import { ref } from "vue";
import { AppFile } from "../stores/mainStore";
// #endregion

// #region component setup
const props = defineProps<{
  file: AppFile;
}>();

const sizeInfo = ref("");

const imageEl = ref<HTMLImageElement | null>(null);

const onImageLoaded = () => {
  if (imageEl.value) {
    sizeInfo.value =
      imageEl.value.naturalWidth + "x" + imageEl.value.naturalHeight;
  }
};
// #endregion
</script>
