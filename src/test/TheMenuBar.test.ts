import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { describe, expect, test } from "vitest";
import { useMainStore } from "../stores/mainStore";
import TheMenuBarVue from "../components/TheMenuBar.vue";

describe("TheMenuBar.vue", async () => {
  const pinia = createTestingPinia();
  const wrapper = mount(TheMenuBarVue, {
    global: {
      plugins: [pinia],
    },
  });
  const store = useMainStore(pinia);

  test("should not show reset button and file input if store.currentFiles has no files", async () => {
    expect(wrapper.find('[data-testid="files-reset-button"]').exists()).toBe(
      false
    );
    expect(wrapper.find('[data-testid="fileinput"]').exists()).toBe(false);
  });

  test("should show reset button and file input if store.currentFiles has files", async () => {
    store.currentFiles.length = 1;
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[data-testid="files-reset-button"]').exists()).toBe(
      true
    );
    expect(wrapper.find('[data-testid="file-input"]').exists()).toBe(true);
  });

  test("should show TheScaleSlider only if one file exists in store.currentFiles", async () => {
    store.currentFiles.length = 0;
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[data-testid="scale-slider]').exists()).toBe(false);
    store.currentFiles.length = 1;
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[data-testid="scale-slider]').exists()).toBe(true);
    store.currentFiles.length = 2;
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[data-testid="scale-slider]').exists()).toBe(false);
  });
});
