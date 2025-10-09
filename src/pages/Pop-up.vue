<template>
  <div
    v-if="!open"
    class="min-h-screen bg-neutral-100 flex items-center justify-center"
  >
    <button
      @click="open = true"
      class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
    >
      Open Popup
    </button>
  </div>

  <div
    v-else
    class="fixed inset-0 bg-black/20 backdrop-blur-2xl bg-opacity-50 flex items-center overflow-auto justify-center px-2 py-4 z-50"
  >
    <div class="relative w-full max-w-[62.625rem]">
      <!-- Navigation Tabs -->
      <div
        class="absolute -top-18 left-1/2 transform -translate-x-1/2 p-1.5 rounded-md flex z-10 bg-gradient-to-r from-red-800 via-theme to-red-800 gap-2"
      >
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="setTab(tab.id)"
          :class="[
            'text-xs md:text-base px-2 md:px-6 py-2 font-bold transition-colors rounded-md',
            tabState.active === tab.id
              ? 'bg-white text-red-700'
              : 'text-white hover:bg-red-800',
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Main Container -->
      <div
        class="relative bg-gradient-to-br from-red-800 via-red-700 to-red-800 rounded-2xl shadow-2xl overflow-hidden md:max-h-[36.563rem] max-w-[62.625rem]"
      >
        <!-- Close Button -->
        <button
          @click="open = false"
          class="absolute top-4 right-4 z-20 bg-white rounded-full h-[1.563rem] w-[1.563rem] hover:bg-neutral-100"
        >
          <img src="/icons/normal/cross.svg" class="text-red-700 ml-1" />
        </button>

        <!-- Content Grid -->
        <div class="flex gap-8 p-4 pt-12 md:p-10">
          <!-- Left Panel -->
          <div class="text-white space-y-3 md:w-72 hidden md:block">
            <button
              @click="goBack"
              :disabled="tabState.previous == null"
              class="flex items-center gap-2 text-white hover:underline mb-11 disabled:text-neutral-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              <span class="text-[1rem]">Back</span>
            </button>

            <!-- NMIMS Logo -->
            <div class="bg-white rounded-lg p-2 inline-block">
              <img :src="LEFT_PANEL_DATA.logo" />
            </div>

            <!-- Title -->
            <div class="-space-y-1 text-[2rem] font-bold">
              <h1>{{ LEFT_PANEL_DATA.title }}</h1>
              <h2>{{ LEFT_PANEL_DATA.subtitle }}</h2>
            </div>

            <!-- Bullet Points -->
            <div class="flex flex-col justify-center space-y-2 text-[0.875rem]">
              <div
                v-for="point in LEFT_PANEL_DATA.bulletPoints"
                :key="point"
                class="flex items-center gap-2"
              >
                <div class="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>{{ point }}</span>
              </div>
            </div>

            <!-- Ranking Badge -->
            <div class="w-fit relative">
              <img src="/logo/ranking.png" />
              <div
                class="h-2 w-2 bg-[#fff30e] -top-0 absolute -right-0 rounded-full animate-pulse"
              ></div>
            </div>

            <!-- Tags -->
            <div
              class="flex  flex-wrap w-64 gap-2 text-[0.5rem] text-black [&>*]:px-2 [&>*]:py-0.5 [&>*]:bg-white [&>*]:rounded-full"
            >
              <span
                v-for="tag in LEFT_PANEL_DATA.tags"
                :key="tag.text"
                :class="{
                  '!bg-[#D9F9A5] !text-[#0B8F4F] font-bold relative': tag.highlight,
                }"
              >
                {{ tag.text }}
                <div
                  class="h-2 w-2 bg-[#fff30e] -top-1 absolute -right-0.5 rounded-full animate-pulse"
                ></div>
              </span>
            </div>
          </div>

          <!-- Right Panel -->
          <div
            class="bg-gradient-to-b from-red-50 to-red-200 rounded-2xl h-fit md:h-[31.25rem] w-full md:w-[34.75rem] pt-8 p-0 md:px-8"
          >
            <Approvals v-if="tabState.active === 'approvals'" />
            <Courses v-else-if="tabState.active === 'courses'" />
            <Campus v-else-if="tabState.active === 'campus'" />
            <Ratings v-else-if="tabState.active === 'ratings'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Approvals from "@/components/pop-up/Approvals.vue";
import Campus from "@/components/pop-up/Campus.vue";
import Courses from "@/components/pop-up/Courses.vue";
import Ratings from "@/components/pop-up/Ratings.vue";
import { ref, reactive, defineComponent } from "vue";

const shouldFlash = ref(true);
const open = ref(true);
const tabState = reactive({
  active: "approvals",
  previous: null,
});

const tabs = [
  { id: "approvals", label: "Approvals" },
  { id: "courses", label: "Courses" },
  { id: "campus", label: "Campus" },
  { id: "ratings", label: "Ratings" },
];

const LEFT_PANEL_DATA = {
  logo: "/logo/uni-1.png",
  title: "NMIMS CDOE",
  subtitle: "Quick Insights",
  bulletPoints: [
    "Lorem ipsum dolor sit",
    "mat outputat blandit nunc ut",
    "blandit nunc ut elit amet he",
  ],
  rankingImage: "/logo/ranking.png",
  tags: [
    { text: "100% Online", highlight: false },
    { text: "15+ Specializations", highlight: false },
    { text: "EMI Available", highlight: false },
    { text: "Flexible Payment Options", highlight: false },
    { text: "Top Choice University", highlight: true },
    { text: "Industry Ready curriculum", highlight: false },
    { text: "Quality Digital Education", highlight: false },
  ],
};

function setTab(tabId) {
  tabState.previous = tabState.active;
  tabState.active = tabId;
}

function goBack() {
  if (tabState.previous) {
    tabState.active = tabState.previous;
    tabState.previous = null;
  }
}
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
