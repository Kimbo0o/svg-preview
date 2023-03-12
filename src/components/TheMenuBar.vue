<template>
  <div
    class="w-full p-4 flex justify-between text-defaultDark dark:text-defaultLight"
  >
    <div></div>
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
// #endregion

// #region component setup
const store = useMainStore();

const toggleDarkMode = () => {
  store.toggleDarkMode();
};
// #endregion
</script>
