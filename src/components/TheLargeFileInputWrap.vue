<template>
  <div class="w-full h-full">
    <TheFileInput />
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
            <div>
              Drop svg file(s)
              <span v-if="!props.draggingOver">or click to open selection</span>
            </div>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
// #region imports
import TheFileInput from "./TheFileInput.vue";
import { PlusIcon } from "@heroicons/vue/24/outline";

// #endregion

// #region component setup
const props = defineProps<{
  draggingOver: boolean;
}>();
// #endregion
</script>
