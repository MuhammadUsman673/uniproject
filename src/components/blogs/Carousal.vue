<script setup lang="ts">
import type { CarouselApi } from "@/components/ui/carousel";
import { watchOnce } from "@vueuse/core";
import { ref, computed } from "vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carousaData } from "@/store/blogs";


// Lazy load image
const Character = new URL("/images/blogs/character.svg", import.meta.url).href;

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  emblaMainApi.value.scrollTo(index);
}

watchOnce(emblaMainApi, (api) => {
  if (!api) return;
  onSelect();
  api.on("select", onSelect);
  api.on("reInit", onSelect);
});

// ✅ Proper highlight logic (3rd word with dynamic color)
function highlightText(text: string, target: string): string {
  if (!text || !target) return text;

  // Escape special regex characters in the target word
  const escapedTarget = target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  
  
  // Create a regex to match the target word (case-insensitive)
//   const regex = new RegExp(`\\b${escapedTarget}\\b`, "gi");

//   console.log(regex);
  
  // Replace and wrap with highlight span
  return text.replace(
    escapedTarget,
    `<span style="color:#d42222;">$&</span>`
  );
}

const hasCarouselData = computed(() => carousaData && carousaData.length > 0);
</script>

<template>
  <div v-if="hasCarouselData" class="w-full max-w-7xl mx-auto">
    <Carousel
      class="relative rounded-xl w-full h-fit bg-[url('/images/blogs/carousal-bg.png')] bg-cover bg-center"
      @init-api="(val) => (emblaMainApi = val)"
    >
      <CarouselContent>
        <CarouselItem v-for="item in carousaData" :key="item.id">
          <div
            class="w-full min-h-[8.25rem] flex items-center justify-center relative"
          >
            <img
              :src="Character"
              alt="Character"
              loading="lazy"
              class="w-40 lg:w-fit mt-8 lg:mt-0 pointer-events-none lg:absolute left-28"
              aria-hidden="true"
            />
            <span
              class="text-center text-xs sm:text-lg max-w-lg mx-auto px-4 relative z-10"
              v-html="highlightText(item.text, item.highLighted)"
            ></span>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious
        class="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-4 bg-theme sm:left-10 w-16 sm:w-20 h-6 text-white hover:opacity-90 transition-opacity z-20"
        aria-label="Previous slide"
      />
      <CarouselNext
        class="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-4 bg-theme sm:right-10 w-16 sm:w-20 h-6 text-white hover:opacity-90 transition-opacity z-20"
        aria-label="Next slide"
      />
    </Carousel>

    <!-- Dots -->
    <Carousel
      class="relative w-fit mx-auto mt-4"
      @init-api="(val) => (emblaThumbnailApi = val)"
    >
      <CarouselContent class="flex ">
        <CarouselItem
          v-for="(item, index) in carousaData"
          :key="item.id"
          class=" basis-6 cursor-pointer "
          @click="onThumbClick(index)"
        >
          <div
            class="rounded-full h-1.5 w-1.5 transition-colors"
            :style="{
              backgroundColor: index === selectedIndex ? '#d42222' : '#a3a3a3',
            }"
            role="button"
            :aria-label="`Go to slide ${index + 1}`"
            :aria-current="index === selectedIndex ? 'true' : 'false'"
          ></div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
