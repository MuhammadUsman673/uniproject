<script setup lang="ts">
import { useFilterStore } from "@/store/filterStore";
import CollapsibleCard from "./CollapsebleCard.vue";
import { storeToRefs } from "pinia";

const filterStore = useFilterStore();
const { selectedApproval, openIndex } = storeToRefs(filterStore);

const { setSelectedApproval, toggleCard } = filterStore;
const approvals = ["UGC", "NAAC", "AICTE", "NIRF", "WES", "DEB"];
</script>

<template>
  <CollapsibleCard
    title="Approvals"
    :isOpen="openIndex.has(0)"
    :onToggle="() => toggleCard(0)"
  >
    <div
      v-for="approval in approvals"
      :key="approval"
      class="flex items-center p-1 cursor-pointer hover:bg-neutral-100"
      @click="
        setSelectedApproval(selectedApproval === approval ? null : approval)
      "
    >
      <span
        :class="[
          'w-2.5 h-2.5 rounded-full mr-2 border border-[#EC1E24] flex items-center justify-center',
          selectedApproval === approval ? 'bg-white' : '',
        ]"
      >
        <span
          v-if="selectedApproval === approval"
          class="w-1.5 h-1.5 bg-[#EC1E24] rounded-full"
        ></span>
      </span>
      <span class="text-[#282529] text-[0.875rem]">{{ approval }}</span>
    </div>
  </CollapsibleCard>
</template>
