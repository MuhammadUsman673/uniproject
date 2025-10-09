<script setup lang="ts">
import { ref, computed, watch } from "vue";
import UniversityCard from "../cards/UniversityCard.vue";
import { Button } from "../ui/button";
import { allUniversityCardsData } from "../../store/uniCardData";
import BudgetCard from "../filters/BudgetCard.vue";
import ApprovalCard from "../filters/ApproveCard.vue";
import { useResponsive } from "@/hooks/use-responsive";
import { useFilterStore } from "@/store/filterStore";
import clsx from "clsx";
import { BrushCleaningIcon, Search } from "lucide-vue-next";
import ClikcPickCard from "../cards/ClikcPickCard.vue";
import CourseFilters from "../filters/courseFilters.vue";

// --- Responsive breakpoints ---
const { isMobile, isTablet } = useResponsive();

const filterStore = useFilterStore();

// --- Row count state ---
const rowCount = ref(3);

// --- Handle "View More" ---
const handleViewMore = () => {
  filterStore.cardsToShow += 9;
};

// --- Watch responsiveness ---
watch(
  [isMobile, isTablet],
  () => {
    if (isMobile.value) rowCount.value = 1;
    else if (isTablet.value) rowCount.value = 2;
    else rowCount.value = 3;
  },
  { immediate: true }
);

// --- Filtering Logic ---
const filteredCards = computed(() => {
  const {
    activeFilter,
    activeSubFilter,
    selectedBudget,
    selectedApproval,
    searchQuery,
  } = filterStore;

  return allUniversityCardsData.filter((card) => {
    if (activeFilter && card.category !== activeFilter) return false;
    if (activeSubFilter && !card.courses?.includes(activeSubFilter))
      return false;

    if (selectedBudget) {
      const budget = card.budget || 0;
      switch (selectedBudget) {
        case "Upto 1 Lakh":
          if (budget > 100000) return false;
          break;
        case "1 Lakh - 2 Lakhs":
          if (budget <= 100000 || budget > 200000) return false;
          break;
        case "2 Lakhs - 3 Lakhs":
          if (budget <= 200000 || budget > 300000) return false;
          break;
        case "3 Lakhs+":
          if (budget <= 300000) return false;
          break;
      }
    }

    if (selectedApproval && !card.approvals?.includes(selectedApproval))
      return false;

    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const titleMatch = card.universityName?.toLowerCase().includes(query);
      const categoryMatch = card.category?.toLowerCase().includes(query);
      const coursesMatch = card.features?.some((c: string) =>
        c.toLowerCase().includes(query)
      );
      const tagMatch = card.tag?.text.toLowerCase().includes(query);
      const approvalMatch = card.approvals?.toLowerCase().includes(query);

      if (
        !titleMatch &&
        !categoryMatch &&
        !coursesMatch &&
        !tagMatch &&
        !approvalMatch
      )
        return false;
    }

    return true;
  });
});
</script>

<template>
  <div
    class="max-w-7xl mx-auto flex flex-col lg:flex-row p-4 gap-b-10 lg:mt-10"
  >
    <!-- Sidebar -->
    <div class="w-full lg:w-64 lg:block">
      <div class="flex justify-between items-center mb-4 p-2">
        <div
          :class="
            clsx(
              'flex justify-between items-center px-6',
              (isTablet || isMobile) && 'hidden'
            )
          "
        >
          <h3 class="text-xl font-semibold text-neutral-800">Filters</h3>
        </div>

        <!-- Toggle Filters -->
        <button
          :class="
            clsx(
              'lg:hidden text-neutral-600 text-sm flex items-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 px-4 py-2 rounded-lg border',
              filterStore.isOpen ? 'bg-[#EC1E24] text-white' : 'bg-white'
            )
          "
          @click="filterStore.setIsOpen(!filterStore.isOpen)"
        >
          <BrushCleaningIcon :size="15" />
          <span>Filters</span>
        </button>

        <!-- Clear All -->
        <button
          :class="
            clsx(
              'text-neutral-600 group text-xs flex items-center gap-2 hover:text-[#EC1E24] transition-all duration-300 transform hover:scale-105 active:scale-95 px-2 py-1 rounded-lg bg-white border',
              !filterStore.isOpen && (isTablet || isMobile) && 'hidden'
            )
          "
          @click="
            () => {
              filterStore.handleClearAll();
              filterStore.setSearchQuery('');
            }
          "
        >
          <img src="/icons/normal/clean.svg" class="group-hover:hidden" />
          <img
            src="/icons/selected/clean.svg"
            class="group-hover:block hidden"
          />
          <span>Clear all</span>
        </button>

        <!-- Search -->
        <div
          :class="
            clsx(
              'relative px-4 lg:px-3 flex-1',
              (isTablet || isMobile) && !filterStore.isOpen ? 'block' : 'hidden'
            )
          "
        >
          <input
            v-model="filterStore.searchQuery"
            type="text"
            placeholder="Search here...."
            class="w-full px-4 py-1.5 text-sm border-2 border-neutral-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
          />
          <Search
            :size="18"
            class="absolute right-8 top-2 text-neutral-300 transition-all duration-300 hover:text-[#EC1E24] hover:scale-110"
          />
        </div>
      </div>

      <!-- Filters Panel -->
      <div
        :class="clsx((isMobile || isTablet) && !filterStore.isOpen && 'hidden')"
      >
        <CourseFilters />
        <BudgetCard />
        <ApprovalCard />
        <ClikcPickCard />
      </div>
    </div>

    <!-- University Cards -->
    <div class="mx-auto lg:mt-0 mt-6">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 lg:gap-6"
      >
        <template
          v-for="(card, index) in filteredCards.slice(
            0,
            filterStore.cardsToShow
          )"
          :key="index"
        >
          <UniversityCard v-bind="card" :index="index" />
          <div
            v-if="
              (index + 1) % rowCount === 0 &&
              index !==
                filteredCards.slice(0, filterStore.cardsToShow).length - 1
            "
            class="col-span-full border-b border-gray-300 my-4"
          ></div>
        </template>
      </div>

      <!-- View More -->
      <div
        v-if="filterStore.cardsToShow < filteredCards.length"
        class="flex justify-center mt-12 mb-0"
      >
        <Button
          size="lg"
          @click="handleViewMore"
          class="bg-[#EC1E24] text-white h-[29px] w-[130px] text-sm rounded-full hover:bg-[#EC1E24] transition font-semibold"
        >
          View More &gt;
        </Button>
      </div>
    </div>
  </div>
</template>
