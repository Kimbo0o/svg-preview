<template>
  <TheDarkMode>
    <div
      class="arrow h-screen before:!border-b-defaultLight before:dark:!border-b-defaultDark"
    >
      <div class="h-full bg-defaultLight dark:bg-defaultDark rounded-lg">
        <div class="h-full grid grid-cols-1 grid-rows-[min-content_1fr]">
          <TheMenuBar />
          <TheDropZone>
            <TheFileOutput />
          </TheDropZone>
        </div>
      </div>
    </div>
  </TheDarkMode>
</template>

<script setup lang="ts">
// #region imports
import TheDarkMode from "./components/TheDarkMode.vue";
import TheDropZone from "./components/TheDropZone.vue";
import TheFileOutput from "./components/TheFileOutput.vue";
import TheMenuBar from "./components/TheMenuBar.vue";
import { useMainStore } from "./stores/mainStore";
// #endregion

// #region component setup
const store = useMainStore();
// #endregion
</script>

<style scoped>
.arrow {
  position: relative;
  padding: 12px 0;
}

.arrow:before {
  content: "";
  height: 0;
  width: 0;
  border-width: 0 8px 12px 8px;
  border-style: solid;
  border-color: transparent;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
