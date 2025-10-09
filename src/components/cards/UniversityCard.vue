<template>
  <div
    class="bg-white md:w-[17.25rem] min-h-[27.95rem] rounded-2xl shadow-md overflow-visible relative border border-neutral-200 flex flex-col hover:scale-105 transition-all hover:shadow-[0px_0px_15px_#c2c2c2]"
  >
    <!-- University Image -->
    <div class="relative">
      <img
        :src="imageUrl"
        :alt="universityName"
        class="w-full md:h-[11.563rem] object-cover p-2 rounded-2xl"
      />

      <!-- University Logo -->
      <div
        v-if="logoUrl"
        class="absolute w-[5.4rem] h-[2.25rem] -bottom-3 left-4 bg-white rounded-lg flex items-center shadow-md z-10"
      >
        <img :src="logoUrl" alt="logo" class="w-30 p-1 object-contain" />
      </div>

      <!-- Tag -->
      <div
        v-if="tag"
        :class="[
          'absolute -bottom-1 right-4 text-[0.625rem] px-2 py-[1px] rounded-full shadow-md font-medium',
          tag.varient === 'orange'
            ? 'text-white bg-[#F97000]'
            : 'bg-[#D9F9A5] text-[#0B8F4F]',
          // shouldFlash ? 'animate-flash' : '',
        ]"
      >
        {{ tag.text }}
        <div class="h-2 w-2 bg-[#fff30e] -top-1 absolute -right-0.5 rounded-full animate-pulse"></div>
      </div>
    </div>

    <div class="p-4 flex flex-col flex-grow z-10">
      <div class="text-base font-bold text-black mb-2 line-clamp-1">
        {{ universityName }}
      </div>

      <!-- Rating -->
      <div
        class="flex items-center bg-red-50 w-fit px-2 text-neutral-600 text-[0.625rem] mb-2 h-[1.25rem]"
      >
        <span class="text-yellow-500 mr-1">⭐</span>
        <span class="font-medium">{{ rating }}</span>
        <span class="ml-1">({{ reviews }} Reviews)</span>
      </div>

      <p class="text-[0.625rem] text-neutral-500 mb-3 line-clamp-2">
        {{ approvals }}
      </p>

      <!-- Features -->
      <div class="flex-grow">
        <div
          v-for="(feature, i) in features"
          :key="i"
          class="flex items-center text-sm text-neutral-700 text-[0.75rem] mb-1"
        >
          <span class="text-green-500 mr-2">●</span>
          <span class="line-clamp-2">{{ feature }}</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="border-t border-neutral-200 pt-4 mt-4 mb-4 text-[0.75rem]">
        <button
          class="flex items-center justify-center w-full bg-neutral-100 text-neutral-700 px-4 h-[1.815rem] rounded-md hover:bg-neutral-200 mb-3 transition-colors duration-200"
        >
          <span class="mr-2">⬇️</span> Download Prospectus
        </button>

        <button
          @click="handleSelect"
          :disabled="isMaxReached"
          :class="[
            'flex items-center justify-center w-full px-4 h-[1.815rem] rounded-md transition-colors duration-200',
            isSelected
              ? 'bg-neutral-100'
              : isMaxReached
              ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
          ]"
        >
          <input
            type="checkbox"
            class="w-3.5 h-3.5 rounded-lg border bg-white shadow-none accent-[#EC1E24]"
            :checked="isSelected"
            @change="handleSelect"
          />
          <span class="ml-2">
            {{ isSelected ? "Added to Compare" : "Add to Compare" }}
          </span>
        </button>
      </div>
    </div>

    <!-- View Details -->
    <button
      class="absolute w-[7rem] h-[1.4rem] text-[0.75rem] -bottom-4 left-[50%] -translate-x-[50%] bg-[#EC1E24] text-white px-4 rounded-full hover:bg-red-600 transition-colors duration-200 font-medium text-sm shadow-lg z-30"
    >
      View Details
    </button>
    <!-- Admission Closing Tag -->
    <div
      v-if="admissionClosing"
      v-html="admissionTag"
      class="text-[0.625rem] z-10"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSelectionStore } from "@/store/selectedStore"; // Pinia store
// import { ref } from 'vue'
interface Tag {
  text: string;
  varient?: "green" | "orange";
}

interface Props {
  universityName: string;
  rating: string;
  reviews: number;
  approvals: string;
  features: string[];
  imageUrl: string;
  tag?: Tag;
  admissionClosing: string;
  logoUrl?: string;
  index: number;
}

const props = defineProps<Props>();

// ✅ Correct store usage (Pinia)
const selectionStore = useSelectionStore();
const selectedItems = computed(() => selectionStore.selectedItems);
// const shouldFlash = ref(true)
const isSelected = computed(() => selectedItems.value.has(props.index));
const isMaxReached = computed(
  () => selectedItems.value.size >= 3 && !isSelected.value
);

// ✅ Fixed selection logic with store update
function handleSelect() {
  const newSelection = new Set<number>(selectedItems.value as Set<number>);

  if (isSelected.value) {
    newSelection.delete(props.index);
  } else if (newSelection.size < 3) {
    newSelection.add(props.index);
  }

  selectionStore.setSelectedItems(newSelection); // call store action
}

// ✅ Admission Tag (HTML string for dynamic render)
const admissionTag = computed(() => {
  if (props.index < 3) {
    return `
      <div class='-top-1.5 left-1/2 -translate-x-1/2 flex justify-center text-white w-[132px] h-[25px] absolute'>
        <img src='/images/uni-card-top.svg' class='absolute'/>
        <div class='z-50 leading-tight'>
          <span class='block text-center'>ADMISSION CLOSING</span>
          <span class='block text-center'>ON ${props.admissionClosing}</span>
        </div>
      </div>`;
  } else {
    return `
      <div class='w-[177px]  text-center top-2 right-2 bg-red-600 text-white text-[0.625rem]  py-0.5 rounded-full z-10 shadow-md absolute'>
        ADMISSION CLOSING ON ${props.admissionClosing}
      </div>`;
  }
});
</script>

<style scoped>
@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-flash {
  animation: flash 1s infinite ease-in-out;
}
</style>
