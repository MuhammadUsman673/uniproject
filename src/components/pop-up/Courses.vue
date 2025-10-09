<template>
  <div class="bg-white h-full p-6 flex flex-col items-center rounded-2xl">
    <h2 class="text-xl font-bold text-neutral-800 mb-6">
      <span class="text-theme">Courses</span> of NMIMS CDOE
    </h2>

    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="(course, idx) in courses"
        :key="idx"
        class="relative border-2 border-neutral-300 rounded-2xl flex flex-col items-center justify-center h-[9.5rem] w-[8.5rem] md:w-[10.5rem]"
      >
        <div
          :class="[
            'absolute -top-0 px-4 py-0 text-[0.6rem] rounded-b-lg font-light',
            course.highlight
              ? 'bg-[#D9F9A5] text-[#0B8F4F]'
              : 'bg-neutral-100 text-neutral-500',
          ]"
        >
          {{ course.label }}
        </div>

        <div class="flex flex-col items-center justify-center">
          <img
            :src="course.icon"
            :alt="course.title"
            class="h-[2rem] w-[2rem] text-red-600"
          />
          <h3 class="mt-2 text-base font-semibold text-neutral-800">
            {{ course.title }}
          </h3>
        </div>

        <button
          class="absolute bottom-2 bg-red-600 hover:bg-red-700 text-white text-sm font-light px-2 py-0 w-32 md:w-40 rounded-full"
        >
          View Program
        </button>
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
const courses = [
  { title: "MCA", label: "Innovative", icon: "/icons/mca.svg" },
  { title: "MA", label: "2 Years", icon: "/icons/ma.svg" },
  { title: "M.Tech", label: "Advanced", icon: "/icons/m-tech.svg" },
  { title: "LLM", label: "High ROI", icon: "/icons/llm.svg", highlight: true },
];

</script>
