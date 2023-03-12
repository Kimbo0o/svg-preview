import { ref } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
  // #region dark mode
  const isDark = ref(false);

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };
  // #endregion

  // #region files
  const currentFiles = ref<{ source: File; objectUrl: string }[]>([]);

  const fileReader = new FileReader();
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

  // #region single image size
  const initSingleImageSize = (naturalWidth: number, naturalHeight: number) => {
    console.log(naturalWidth, naturalHeight);
  };
  // #endregion

  return {
    isDark,
    toggleDarkMode,
    currentFiles,
    handleNewFile,
    initSingleImageSize,
  };
});
