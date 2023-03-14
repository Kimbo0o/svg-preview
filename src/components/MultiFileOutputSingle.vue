<template>
  <div
    class="w-full h-full grid grid-cols-1 grid-rows-[1fr_min-content] border rounded border-defaultDark/50 dark:border-defaultLight/50"
  >
    <div class="flex justify-center items-center">
      <img
        ref="imageEl"
        class="border rounded border-defaultDark/50 dark:border-defaultLight/50"
        :src="props.file.objectUrl"
      />
    </div>
    <div
      class="m-2 text-defaultDark dark:text-defaultLight text-xs text-center"
    >
      {{ props.file.source.name }}
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

const imageEl = ref<HTMLImageElement | null>(null);
// #endregion
</script>
