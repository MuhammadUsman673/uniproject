<template>
  <div class="bg-white h-full p-6 flex flex-col items-center rounded-2xl">
    <h2 class="text-xl font-bold text-neutral-800 mb-6">
      <span class="text-theme">Approvals</span> of NMIMS CDOE
    </h2>

    <div class="space-y-3">
      <div
        v-for="apr in APPROVALS"
        :key="apr.title"
        class="flex items-center rounded-2xl gap-4 h-[4.5rem] max-w-[26.44rem] bg-[#F8F8F8] border border-neutral-200"
      >
        <div
          class="w-20 h-20 flex items-center justify-center flex-shrink-0 mx-4"
        >
          <img :src="apr.logo" class="max-h-full max-w-full object-contain" />
        </div>
        <div class="flex-1">
          <p class="text-[#282529] text-xs md:text-sm font-medium">
            {{ apr.title }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-5 text-center">
      <button
        class="bg-gradient-to-r from-red-800 via-theme to-red-800 text-white font-medium px-4 py-1 rounded-lg text-sm"
      >
        Know More Details
      </button>
    </div>
  </div>
</template>

<script setup>
const APPROVALS = [
  { title: "NAAC A+ Accreditation", logo: "/logo/apr-1.png" },
  { title: "UGC-Entitled", logo: "/logo/apr-2.png" },
  { title: "Approved by AICTE", logo: "/logo/apr-3.png" },
  { title: "MHRD Category 1 University", logo: "/logo/apr-4.png" },
];
</script>
