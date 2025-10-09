<script setup lang="ts">
import { useFilterStore, type BudgetOption } from "@/store/filterStore";
import CollapsibleCard from "./CollapsebleCard.vue"; // fixed spelling

import { storeToRefs } from "pinia";

const filterStore = useFilterStore();
const { selectedBudget, openIndex } = storeToRefs(filterStore);
const { setSelectedBudget, toggleCard } = filterStore;

const budgets: BudgetOption[] = [
  "Upto 1 Lakh",
  "1 Lakh - 2 Lakhs",
  "2 Lakhs - 3 Lakhs",
  "3 Lakhs+",
];
</script>

<template>
  <CollapsibleCard
    title="Budget"
    :isOpen="openIndex.has(1)"
    :onToggle="() => toggleCard(1)"
  >
    <div
      v-for="budget in budgets"
      :key="String(budget)"
      class="flex items-center p-1 cursor-pointer hover:bg-neutral-100"
      @click="setSelectedBudget(selectedBudget === budget ? null : budget)"
    >
      <span
        class="w-2.5 h-2.5 rounded-full mr-2 border border-[#EC1E24] flex items-center justify-center"
      >
        <span
          v-if="selectedBudget === budget"
          class="w-1.5 h-1.5 bg-[#EC1E24] rounded-full"
        ></span>
      </span>
      <span class="text-[#282529] text-[0.875rem]">{{ budget }}</span>
    </div>
  </CollapsibleCard>
</template>
