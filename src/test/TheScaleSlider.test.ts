import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { describe, expect, test } from "vitest";
import { useMainStore } from "../stores/mainStore";
import TheScaleSliderVue from "../components/TheScaleSlider.vue";

describe("TheScaleSlider.vue", async () => {
  const wrapper = mount(TheScaleSliderVue, {
    global: {
      plugins: [createTestingPinia()],
    },
  });
  const slider = wrapper.find("input");

  const store = useMainStore();

  // set inital value
  store.singleImageScale = 0.7;
  await wrapper.vm.$nextTick();

  test("should update store.singleImageScale when slider value changes", async () => {
    // simulate slider change
    await slider.setValue(0.75);

    expect(store.singleImageScale).toBe("0.75");
  });

  test("should update slider value when store.singleImageScale changes", async () => {
    store.singleImageScale = 0.8;
    await wrapper.vm.$nextTick();
    expect(slider.element.value).toBe("0.8");
  });
});
