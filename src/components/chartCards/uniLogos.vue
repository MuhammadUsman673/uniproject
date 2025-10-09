<script setup lang="ts">
import { ref } from "vue";

const logos = ref([
  {
    name: "Amity University",
    src: "https://upload.wikimedia.org/wikipedia/en/1/1c/Amity_University_logo.png",
    alt: "Amity University Logo",
  },
  {
    name: "Online Manipal",
    src: "https://onlinemanipal.com/wp-content/uploads/2023/06/Online-Manipal-Logo.png",
    alt: "Online Manipal Logo",
  },
  {
    name: "IARDA",
    src: "https://www.iardaindia.org/images/logo.png",
    alt: "IARDA Logo",
  },
  {
    name: "Amity University",
    src: "https://upload.wikimedia.org/wikipedia/en/1/1c/Amity_University_logo.png",
    alt: "Amity University Logo",
  },
  {
    name: "Online Manipal",
    src: "https://onlinemanipal.com/wp-content/uploads/2023/06/Online-Manipal-Logo.png",
    alt: "Online Manipal Logo",
  },
  {
    name: "IARDA",
    src: "https://www.iardaindia.org/images/logo.png",
    alt: "IARDA Logo",
  },
]);

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.style.display = "none";
  const fallback = target.nextElementSibling as HTMLElement;
  if (fallback) fallback.style.display = "block";
};
</script>

<template>
  <div class="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 text-slate-800">
        Our Partners
      </h2>

      <div class="relative overflow-hidden">
        <!-- Gradient overlays -->
        <div
          class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-100 to-transparent z-10"
        ></div>

        <!-- Scrollable container -->
        <div
          class="flex overflow-x-auto gap-8 pb-4 px-8 scrollbar-hide"
        >
          <div
            v-for="(logo, index) in logos"
            :key="index"
            class="flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-8 w-72 h-48 flex items-center justify-center border border-slate-200"
          >
            <div class="flex flex-col items-center justify-center space-y-4">
              <div class="h-24 flex items-center justify-center">
                <img
                  :src="logo.src"
                  :alt="logo.alt"
                  class="max-h-full max-w-full object-contain"
                  @error="handleImageError"
                />
                <div class="hidden text-center">
                  <div
                    class="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-2"
                  >
                    <span class="text-2xl font-bold text-slate-600">
                      {{ logo.name.charAt(0) }}
                    </span>
                  </div>
                  <p class="text-sm font-semibold text-slate-700">
                    {{ logo.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center text-slate-600 mt-8 text-sm">
        Scroll horizontally to view all partners →
      </p>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
