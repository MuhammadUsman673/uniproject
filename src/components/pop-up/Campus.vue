<template>
  <div class="bg-white h-full p-6 flex flex-col items-center rounded-2xl">
    <h2 class="text-xl font-bold text-neutral-800 mb-6">
      <span class="text-theme">Campus</span> Locations
    </h2>

    <div class="space-x-2 space-y-1.5 grid grid-cols-2 gap-2">
      <div
        v-for="apr in CAMPUSES"
        :key="apr.title"
        class="flex items-center rounded-lg h-[4.2rem] w-[8.6rem] md:w-[10rem] border-2 border-neutral-400"
      >
        <div class="w-12 h-12 md:w-13 md:h-13 rounded-full flex-shrink-0 mx-2">
          <img
            :src="apr.logo"
            class="object-cover aspect-square rounded-full"
          />
        </div>
        <div class="flex-1">
          <p class="text-[#282529] text-sm font-medium">{{ apr.title }}</p>
        </div>
      </div>
    </div>

    <div class="mt-5 text-center">
      <button
        class="bg-gradient-to-r from-red-800 via-theme to-red-800 text-white font-semibold px-4 py-1 rounded-lg text-sm"
      >
        Know More Details
      </button>
    </div>
  </div>
</template>

<script setup>
const CAMPUSES = [
  { title: "Mumbai", logo: "/images/cambridge.png" },
  { title: "Shirpur", logo: "/images/cambridge.png" },
  { title: "Indore", logo: "/images/cambridge.png" },
  { title: "Mumbai", logo: "/images/cambridge.png" },
  { title: "Mumbai", logo: "/images/cambridge.png" },
  { title: "Shirpur", logo: "/images/cambridge.png" },
  { title: "Indore", logo: "/images/cambridge.png" },
  { title: "Mumbai", logo: "/images/cambridge.png" },
];

</script>
