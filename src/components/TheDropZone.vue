<template>
  <div
    ref="targetEl"
    class="overflow-y-auto"
    :class="{
      'm-4 mt-0': showInput,
      'p-4 pt-0': !showInput,
    }"
    @drop="onDrop"
    @dragleave="onDragLeave"
    @dragenter="onDragEnter"
    @dragover="onDragOver"
  >
    <div v-if="showInput" class="w-full h-full">
      <TheLargeFileInputWrap :dragging-over="dragging" />
    </div>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script setup lang="ts">
// #region imports
import { ref, onMounted, computed } from "vue";
import { useMainStore } from "../stores/mainStore";
import TheLargeFileInputWrap from "./TheLargeFileInputWrap.vue";
// #endregion

// #region component setup
const store = useMainStore();

const showInput = computed(() => {
  return dragging.value || store.currentFiles.length === 0;
});
// #endregion

// #region drag & drop
const dragCounter = ref(0);

const dragging = computed(() => dragCounter.value > 0);

const onDragEnter = () => {
  dragCounter.value++;
};

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
};

const onDragLeave = () => {
  dragCounter.value--;
};

const onDrop = (event: DragEvent) => {
  event.preventDefault();
  dragCounter.value = 0;

  if (event.dataTransfer?.items) {
    [...event.dataTransfer.items].forEach((item) => {
      if (item.kind === "file") {
        const file = item.getAsFile();
        if (file) {
          store.handleNewFile(file);
        }
      }
    });
  } else if (event.dataTransfer?.files) {
    [...event.dataTransfer?.files].forEach((file) => {
      store.handleNewFile(file);
    });
  }
};
// #endregion

// #region target size
const targetEl = ref<HTMLDivElement | null>(null);
onMounted(() => {
  if (targetEl.value) {
    store.setTargetEl(targetEl.value);
  }
});
// #endregion
</script>
