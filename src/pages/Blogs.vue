<script setup lang="ts">
import { ref, computed } from "vue";
import Carousal from "@/components/blogs/Carousal.vue";
import LgCard from "@/components/blogs/LG-Card.vue";
import SMCard from "@/components/blogs/SM-Card.vue";
import Input from "@/components/ui/input/Input.vue";
import Select from "@/components/ui/select/Select.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import { categories, LGCardData, SMCardData } from "@/store/blogs";
import { Search } from "lucide-vue-next";
import "@/../public/css/no-scroll.css";
import Contact from "@/components/contact/Contact.vue";

// state
const selectedCategory = ref("All");
const searchQuery = ref("");
const visibleCount = ref(9);

// filtering logic
const filteredCards = computed(() => {
  return LGCardData.filter((card) => {
    const matchCategory =
      selectedCategory.value === "All" ||
      card.category.toLowerCase() === selectedCategory.value.toLowerCase();

    const matchSearch =
      card.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      card.courseType.toLowerCase().includes(searchQuery.value.toLowerCase());

    return matchCategory && matchSearch;
  });
});

// slice based on visible count
const visibleCards = computed(() =>
  filteredCards.value.slice(0, visibleCount.value)
);

// load more handler
const loadMore = () => {
  visibleCount.value += 9;
};
</script>

<template>
  <div class="max-w-7xl lg:px-8 px-4 mx-auto mb-20">
    <!-- Header -->
    <div class="text-center mx-auto py-8">
      <h2 class="text-[1.5rem] md:text-[2.25rem] font-medium">
        Collegesathi Blogs
      </h2>
      <p class="text-sm md:text-base my-4 md:my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incid
      </p>
    </div>

    <!-- Top Section -->
    <div class="grid lg:grid-cols-2 gap-8 pt-2">
      <img
        src="/images/blogs/blog-1.png"
        alt=""
        class="w-full lg:w-[36.688rem] h-full lg:h-[18.313rem]"
      />

      <div class="flex flex-col gap-7">
        <SMCard
          v-for="item in SMCardData"
          :key="item.id"
          :title="item.title"
          :color="item.color"
          :course-type="item.courseType"
          :image_url="item.image_url"
        />
      </div>
    </div>

    <!-- Carousel -->
    <div class="pt-10 md:pt-16">
      <Carousal />
    </div>

    <!-- Category Buttons -->
    <div
      class="flex md:justify-center gap-4 text-sm text-neutral-700 overflow-scroll no-scrollbar py-8"
    >
      <button
        v-for="category in ['All', ...categories]"
        :key="category"
        class="bg-[#F1F1F1] py-1 px-3 text-nowrap cursor-pointer"
        :class="{
          'bg-red-50 text-theme': selectedCategory === category,
        }"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <!-- Filter + Search -->
    <div class="flex justify-between my-4">
      <div>
        <Select v-model="selectedCategory">
          <SelectTrigger
            class="text-sm w-full focus-visible:ring-0 border-none shadow-none text-neutral-500 "
          >
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="flex items-center">
        <Search :size="18" class="text-neutral-500" />
        <Input
          v-model="searchQuery"
          class="pl-1.5 border-none focus-visible:ring-0 w-20 focus:w-40 transition-all shadow-none"
          placeholder="Search"
        />
      </div>
    </div>

    <hr class="mb-8 md:mb-16 border-b border-neutral-300" />

    <!-- Filtered Large Cards -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-10 md:gap-y-20 gap-x-8 ">
      <LgCard
        v-for="item in visibleCards"
        :key="item.id"
        :title="item.title"
        :image_url="item.image_url"
        :after="item.after"
        :category="item.category"
        :course-type="item.courseType"
        :views="item.views"
        :read-duration="item.readDuration"
      />
    </div>

    <!-- View More Button -->
    <div v-if="visibleCount < filteredCards.length" class="text-center mt-12">
      <button
        @click="loadMore"
        class="bg-[#EC1E24] w-[14.563rem] h-[3.313rem] text-[1.125rem] text-white py-2 px-6 rounded-md hover:bg-[#ca1c21] transition"
      >
        View More
      </button>
    </div>

    <Contact />
  </div>
</template>
