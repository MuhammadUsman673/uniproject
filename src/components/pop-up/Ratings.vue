<template>
  <div class="bg-white rounded-2xl h-full p-6 shadow-sm">
    <h2 class="text-xl font-bold text-neutral-800 mb-6 text-center">
      <span class="text-y">Ratings and Reviews</span> by Students
    </h2>

    <div
      class="flex items-center gap-3 text-center mb-6 bg-red-100 w-fit px-4 mx-auto rounded-2xl"
    >
      <div class="justify-center gap-2">
        <p class="text-[3.25rem] font-bold text-[#282529]">4.5</p>
      </div>
      <div>
        <div class="flex items-center text-[#FBAD33] space-x-1">
          <StarIcon v-for="i in 4" :key="i" class="fill-current" :size="15" />
          <StarIcon :filled="true" :size="15" class="fill-white stroke-0" />
        </div>
        <p class="text-neutral-500 text-xs">Based on 20 Reviews</p>
      </div>
    </div>

    <div class="border border-neutral-300 rounded-lg p-5 lg:px-10 mb-6">
      <h3 class="font-semibold text-[1.063rem] text-neutral-800 mb-4">
        Peripheral Rating <span class="text-sm font-normal">(Out of 5)</span>
      </h3>
      <div class="space-y-2 text-sm">
        <div
          v-for="(item, idx) in ratings"
          :key="idx"
          class="flex items-center text-xs md:text-base justify-between text-[#282529]"
        >
          <span>{{ item.label }}</span>
          <div class="flex items-center gap-2">
            <span class="font-semibold">{{ item.score }}</span>
            <div class="flex text-[#FBAD33]">
              <StarIcon
                v-for="i in 5"
                :key="i"
                class="w-4 h-4"
                :class="{
                  'fill-current': i <= Math.floor(item.score),
                  'fill-neutral-200 stroke-neutral-200':
                    i > Math.floor(item.score),
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 text-center">
      <button
        class="bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-white font-medium px-4 py-1 rounded-lg text-sm"
      >
        Know More Details
      </button>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from "lucide-vue-next";

const ratings = [
  { label: "Average Ratings", score: 3.9 },
  { label: "Digital Infrastructure", score: 4.2 },
  { label: "Curriculum", score: 3.9 },
  { label: "Value For Money", score: 3.9 },
];
</script>
