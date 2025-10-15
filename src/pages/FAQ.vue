<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronRight, PenLine, Search } from "lucide-vue-next";

import Accordion from "@/components/FAQ/Accordion.vue";
import Contact from "@/components/contact/Contact.vue";
import { Input } from "@/components/ui/input";
import { data } from "@/store/faq";

const categories = ["General", "Online Universities", "Courses", "CS Clickpak"];
const selectedCategory = ref(categories[0]);

const selectCategory = (category: string) => {
  selectedCategory.value = category;
};

// Example filtered data logic (replace with actual category key later)
const filteredData = computed(() => {
  const categoryData = data.find(
    (item: { category: string }) => item.category === selectedCategory.value
  );
  return categoryData ? categoryData.questions : [];
});
</script>

<template>
  <div class=" max-w-7xl  mx-auto">
    <!-- Background Glow -->
    <div
      class="absolute top-0 left-1/2 w-0 h-2 rounded-full shadow-[0px_0px_600px_600px_#f6171f]/5 -z-1"
    ></div>

    <div class="px-4  mt-6 flex gap-2 text-sm">
      <a href="/"> Home </a>
      <span> <ChevronRight :size="18" /> </span>
      <span class="text-theme"> FAQ </span>
    </div>

    <!-- Hero Section -->
    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 mx-auto px-6 "
    >
      <div class="flex flex-col justify-center gap-6">
        <h1
          class="text-[2rem] text-center md:text-start md:text-[2.5rem] lg:text-[3.75rem] font-semibold leading-tight"
        >
          Frequently Asked Questions
        </h1>

        <p class="text-lg text-center md:text-start text-neutral-600 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididu.
        </p>

        <button
          class="flex items-center justify-center gap-3 lg:w-[17.813rem] lg:h-[3.75rem] px-4 py-4 w-fit mx-auto md:mx-0 lg:text-xl text-white rounded-xl transition-all bg-gradient-to-b from-theme to-[#ac1116] hover:shadow-lg"
        >
          <PenLine /> Ask Your Question
        </button>
      </div>

      <div class="m-auto max-w-md md:block hidden">
        <img src="/faq-hero.svg" alt="FAQ illustration" class="w-full h-auto" />
      </div>
    </section>

    <!-- Search Bar -->
    <div
      class="relative flex items-center border-2 border-neutral-300 justify-center mx-4 md:w-fit md:mx-auto px-10 py-2 bg-white rounded-full shadow-[0px_2px_8px_1px_#d2d2d4]"
    >
      <Search class="absolute left-5 text-neutral-400" :size="20" />
      <Input
        type="text"
        placeholder="Search your question..."
        class="md:w-[44.5rem] md:h-[3.5rem] bg-transparent border-none shadow-none focus:ring-0 focus-visible:ring-0 text-neutral-700"
      />
      <img
        src="/icons/google-voice.svg"
        alt="Voice Search"
        class="absolute right-4 w-7 h-7 cursor-pointer opacity-70 hover:opacity-100 transition"
      />
    </div>

    <!-- Main FAQ Section -->
    <section class="flex flex-col md:flex-row gap-10 py-20 px-4 ">
      <!-- Sidebar -->
      <aside class="md:w-1/4 md:min-w-[200px] lg:pr-8 border-neutral-200">
        <h2 class="mb-10 text-lg font-semibold md:block hidden">Lorem ipsum</h2>

        <ul
          class="pb-2 md:border-l-2 lg:border-[#c8c8c8] flex gap-12  md:gap-0 md:flex-col overflow-x-scroll md:overflow-visible"
        >
          <li
            v-for="(category, i) in categories"
            :key="i"
            @click="selectCategory(category)"
            :class="[
              'relative w-full -ml-0.5 flex px-0   items-center md:pl-8 text-neutral-600 md:h-16 cursor-pointer transition-all hover:text-black',
              selectedCategory == category &&
                'border-b-2 md:border-none border-theme',
            ]"
          >
            <div
              class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full rounded transition-all hidden md:block"
              :class="[
                category === selectedCategory ? 'bg-red-600' : 'bg-transparent',
              ]"
            ></div>

            <span
              :class="[
                category === selectedCategory ? 'font-medium text-black' : '',
                'text-nowrap overflow-hidden',
              ]"
            >
              {{ category }}
            </span>
          </li>
        </ul>
      </aside>

      <!-- Accordion List -->
      <div class="flex flex-col gap-y-8 w-full">
        <div class="flex flex-col gap-3 ">
          <Accordion
            v-for="item in filteredData"
            :key="item.id"
            :title="item.title"
            :content="item.content"
          />
        </div>
        <a href="#" class="md:ml-8 w-fit h-fit border-b-2 border-theme"
          >Learn More</a
        >
      </div>
    </section>

    <!-- Contact Section -->
    <section>
      <Contact />
    </section>
  </div>
</template>
