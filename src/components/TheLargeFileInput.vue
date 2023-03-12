<template>
  <div class="w-full h-full">
    <input
      type="file"
      class="hidden"
      id="fileInput"
      accept=".svg"
      multiple
      @change="onHandleInputChange"
    />
    <div class="w-full h-full">
      <label for="fileInput" class="cursor-pointer">
        <div
          class="w-full h-full rounded border-2 border-dashed border-defaultDark dark:border-defaultLight flex items-center justify-center"
          :class="{ 'bg-gray-400': props.draggingOver }"
        >
          <div
            class="text-defaultDark dark:text-defaultLight text-center flex flex-col items-center"
          >
            <PlusIcon class="w-16 h-16 mb-4"></PlusIcon>
            <div>Drop svg file(s) or click to open selection</div>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
// #region imports
import { PlusIcon } from "@heroicons/vue/24/outline";
import { useMainStore } from "../stores/mainStore";
// #endregion

// #region component setup
const props = defineProps<{
  draggingOver: boolean;
}>();

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
