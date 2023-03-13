import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useElementSize } from "@vueuse/core";

export const useMainStore = defineStore("main", () => {
  // #region dark mode
  const isDark = ref(false);

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };
  // #endregion

  // #region files
  const currentFiles = ref<{ source: File; objectUrl: string }[]>([]);

  const handleNewFile = (newFile: File) => {
    console.log("handle new File", newFile);
    if (newFile.type === "image/svg+xml") {
      currentFiles.value.push({
        source: newFile,
        objectUrl: URL.createObjectURL(newFile),
      });
    }
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

  const singleImageScale = ref(0);

  const singleImageReference = computed(() => {
    return targetRatio.value > imageRatio.value ? "height" : "width";
  });

  const initSingleImageSize = (naturalWidth: number, naturalHeight: number) => {
    singleImageNaturalWidth.value = naturalWidth;
    singleImageNaturalHeight.value = naturalHeight;
    // init scale
    singleImageScale.value =
      singleImageReference.value === "width"
        ? singleImageNaturalWidth.value / targetElWidth.value
        : singleImageNaturalHeight.value / targetElHeight.value;
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
    handleNewFile,
    setTargetEl,
    initSingleImageSize,
    singleImageWidth,
    singleImageHeight,
    singleImageScale,
  };
});
