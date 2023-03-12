<template>
  <div :class="{ dark: store.isDark }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// #region imports
import { useMainStore } from "../stores/mainStore";
// #endregion

// #region component setup
const store = useMainStore();
// #endregion
</script>
