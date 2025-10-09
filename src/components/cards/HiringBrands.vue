<script setup lang="ts">
import { onMounted, ref } from "vue";

const companies = [
  "ms.png",
  "adani.png",
  "adecco.png",
  "addobe.png",
  "honda.png",
  "google.png",
  "facebook.png",
];

const scrollRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (scrollRef.value) {
    const el = scrollRef.value;
    requestAnimationFrame(() => {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2.4;
    });
  }
});
</script>

<template>
  <div class="text-center mb-12">
    <p class="text-[#282529] text-[0.75rem]">
      Get hired by the world's exciting companies
    </p>

    <div
      ref="scrollRef"
      class="flex overflow-x-auto items-center lg:justify-center gap-8 md:gap-12 px-2 my-12"
    >
      <img
        v-for="(company, index) in companies"
        :key="index"
        class="flex-shrink-0 grayscale"
        :src="`/logo/${company}`"
        :alt="`Company logo ${index}`"
      />
    </div>
  </div>
</template>
