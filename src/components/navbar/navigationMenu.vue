<template>
  <div class="relative ">
    <nav class="flex gap-10 items-center">
      <!-- Explore Programs Dropdown -->
      <div
        class="relative"
        @mouseenter="openMenu('programs')"
        @mouseleave="closeMenu"
      >
        <button
          class="border border-[#EC1E24] bg-[#FFF5f5] hover:bg-[#fbd3d3] text-[#282529] rounded-full px-4 py-2 transition"
        >
          Explore Programs
        </button>

        <transition name="fade">
          <div
            v-if="activeMenu === 'programs'"
            class="absolute z-[9999] top-full mt-2 bg-white shadow-lg rounded-lg p-4 grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
          >
            <div class="row-span-3">
              <router-link
                to="/"
                class="flex flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 p-6 no-underline select-none hover:shadow-md"
              >
                <div class="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                <p class="text-sm text-gray-500 leading-tight">
                  Beautifully designed components built with Tailwind CSS.
                </p>
              </router-link>
            </div>

            <ListItem to="/compare" title="Introduction">
              Re-usable components built using Radix UI and Tailwind CSS.
            </ListItem>
            <ListItem to="/docs/installation" title="Installation">
              How to install dependencies and structure your app.
            </ListItem>
            <ListItem to="/docs/primitives/typography" title="Typography">
              Styles for headings, paragraphs, lists...etc
            </ListItem>
          </div>
        </transition>
      </div>

      <!-- Top Universities -->
      <router-link to="/compare" class="hover:text-[#EC1E24] transition">
        Top Universities
      </router-link>

      <!-- CikPick -->
      <router-link to="/pop-up" class="hover:text-[#EC1E24] transition">
        CikPick
      </router-link>

      <!-- More Dropdown -->
      <div
        class="relative"
        @mouseenter="openMenu('more')"
        @mouseleave="closeMenu"
      >
        <button
          class="flex gap-1 items-center text-[#282529] rounded-full px-4 py-2 transition"
        >
          More
          <ChevronDown :size="20" />
        </button>

        <transition name="fade">
          <div
            v-if="activeMenu === 'more'"
            class="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-4 grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
          >
            <div class="row-span-3">
              <router-link
                to="/"
                class="flex flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 p-6 no-underline select-none hover:shadow-md"
              >
                <div class="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                <p class="text-sm text-gray-500 leading-tight">
                  Beautifully designed components built with Tailwind CSS.
                </p>
              </router-link>
            </div>

            <ListItem to="/docs" title="Introduction">
              Re-usable components built using Radix UI and Tailwind CSS.
            </ListItem>
            <ListItem to="/docs/installation" title="Installation">
              How to install dependencies and structure your app.
            </ListItem>
            <ListItem to="/docs/primitives/typography" title="Typography">
              Styles for headings, paragraphs, lists...etc
            </ListItem>
          </div>
        </transition>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ListItem from "./listView.vue";
import { ChevronDown } from "lucide-vue-next";

const activeMenu = ref<string | null>(null);

const openMenu = (menu: string) => {
  activeMenu.value = menu;
};

const closeMenu = () => {
  activeMenu.value = null;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
