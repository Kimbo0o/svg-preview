<template>
  <div
    class="w-full p-4 flex justify-between items-center text-defaultDark dark:text-defaultLight"
  >
    <div class="flex items-center gap-2">
      <template v-if="store.currentFiles.length">
        <button type="button" @click="store.resetFiles">
          <XCircleIcon class="w-6 h-6" />
        </button>
        <label for="fileInput" class="cursor-pointer">
          <PlusCircleIcon class="w-6 h-6" />
          <TheFileInput />
        </label>
      </template>
      <TheScaleSlider v-if="store.currentFiles.length === 1" />
    </div>
    <button type="button" @click="toggleDarkMode">
      <MoonIcon v-if="store.isDark" class="w-6 h-6" />
      <SunIcon v-else class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
// #region imports
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
import { useMainStore } from "../stores/mainStore";
import TheScaleSlider from "./TheScaleSlider.vue";
import { XCircleIcon, PlusCircleIcon } from "@heroicons/vue/24/outline";
import TheFileInput from "./TheFileInput.vue";
// #endregion

// #region component setup
const store = useMainStore();

const toggleDarkMode = () => {
  store.toggleDarkMode();
};
// #endregion
</script>
