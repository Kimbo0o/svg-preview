import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";
import { useElementSize, usePreferredDark } from "@vueuse/core";

export type AppFile = { source: File; objectUrl: string; key: number };

export const useMainStore = defineStore("main", () => {
  // #region dark mode
  const isPreferredDark = usePreferredDark();

  watch(isPreferredDark, (newPreferredDark) => {
    isDark.value = newPreferredDark;
  });
  const isDark = ref(isPreferredDark.value);

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };
  // #endregion

  // #region files
  const currentFiles = ref<AppFile[]>([]);

  const handleNewFile = (newFile: File) => {
    console.log("handle new File", newFile);
    if (newFile.type === "image/svg+xml") {
      currentFiles.value.push({
        source: newFile,
        objectUrl: URL.createObjectURL(newFile),
        key: currentFiles.value.length,
      });
    }
    console.log(currentFiles.value);
  };

  const resetFiles = () => {
    currentFiles.value = [];
  };
  // #endregion

  // #region single image sizing
  const targetEl = ref<HTMLDivElement | null>(null);
  const setTargetEl = (el: HTMLDivElement) => {
    targetEl.value = el;
  };

  const { width: targetElWidth, height: targetElHeight } =
    useElementSize(targetEl);

  const singleImageNaturalWidth = ref(0);
  const singleImageNaturalHeight = ref(0);

  const targetRatio = computed(() => {
    return targetElWidth.value / targetElHeight.value;
  });

  const imageRatio = computed(() => {
    return singleImageNaturalWidth.value / singleImageNaturalHeight.value;
  });

  const singleImageScale = ref(0.5);

  const singleImageReference = computed(() => {
    return targetRatio.value > imageRatio.value ? "height" : "width";
  });

  const initSingleImageSize = (naturalWidth: number, naturalHeight: number) => {
    singleImageNaturalWidth.value = naturalWidth;
    singleImageNaturalHeight.value = naturalHeight;
    // init scale
    singleImageScale.value = 0.5;
  };

  const singleImageWidth = computed(() => {
    if (singleImageReference.value === "width") {
      return singleImageScale.value * targetElWidth.value + "px";
    } else {
      return "auto";
    }
  });

  const singleImageHeight = computed(() => {
    if (singleImageReference.value == "height") {
      return singleImageScale.value * targetElHeight.value + "px";
    } else {
      return "auto";
    }
  });
  // #endregion

  return {
    isDark,
    toggleDarkMode,
    currentFiles,
    resetFiles,
    handleNewFile,
    setTargetEl,
    initSingleImageSize,
    singleImageWidth,
    singleImageHeight,
    singleImageScale,
  };
});
