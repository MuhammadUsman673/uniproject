<script setup lang="ts">
import { ref, computed } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent, TitleComponent]);

const facts = ref([
  "40,000+ Colleges Offer UG Courses in India.",
  "Over 1.3 Crore Students Enroll in UG Programs Every Year.",
  "More Than 25,000 Colleges Are Now NAAC Accredited.",
  "Scholarships Cover Up to 100% Tuition for Eligible Students.",
  "65% of UG Students Come from Tier 2 & Tier 3 Cities.",
  "Internship-Integrated UG Programs Are Growing.",
]);

const chartData = ref([
  { program: "B.A.", percentage: 40 },
  { program: "B.Com", percentage: 25 },
  { program: "B.Sc.", percentage: 20 },
  { program: "BBA", percentage: 8 },
  { program: "BCA", percentage: 5 },
  { program: "Others", percentage: 5 },
]);

const chartOptions = computed(() => ({
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
    formatter: "{b}: {c}%",
  },
  grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
  xAxis: {
    type: "category",
    data: chartData.value.map((d) => d.program),
    axisTick: { alignWithLabel: true },
    axisLine: { lineStyle: { color: "#ccc" } },
  },
  yAxis: {
    type: "value",
    max: 40,
    axisLabel: { formatter: "{value}%" },
  },
  series: [
    {
      name: "Enrollment %",
      type: "bar",
      barWidth: "60%",
      data: chartData.value.map((d) => d.percentage),
      itemStyle: {
        color: (params: any) =>
          params.dataIndex === 0 ? "#fda4af" : "#fecdd3",
        borderRadius: [4, 4, 0, 0],
      },
    },
  ],
}));
</script>

<template>
  <div class="flex gap-4 p-6 w-full h-[32rem] bg-[#F8F8F8] rounded-2xl">
    <div class="flex gap-4 w-full h-full">
      <!-- Left Section -->
      <div class="bg-white shadow-sm w-[18.875rem] rounded-xl p-5 pb-0 flex-shrink-0">
        <h2 class="text-sm font-normal mb-2">
          Cool Facts About
          <br />
          <span class="font-bold text-neutral-600">UG Programs</span> in India
        </h2>
        <div>
          <div
            v-for="(fact, index) in facts"
            :key="index"
            class="flex items-start border-b py-3 gap-2"
          >
            <span class="text-neutral-400 text-xs">∘</span>
            <p class="text-neutral-700 text-xs leading-relaxed">{{ fact }}</p>
          </div>
        </div>
      </div>

      <!-- Right Section - Chart -->
      <div class="flex-1 bg-white rounded-xl p-6 flex flex-col">
        <h3 class="text-neutral-700 text-sm font-medium mb-4 ">
          Percent of students enrolled in different programs.
        </h3>
        <div class="flex-1 h-[23.7rem]  w-[23rem]">
          <VChart
            class=" "
            :option="chartOptions"
            autoresize
          />
        </div>
      </div>
    </div>
  </div>
</template>
