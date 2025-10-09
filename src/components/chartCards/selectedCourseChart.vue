<script setup lang="ts">
import { ref } from "vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([PieChart, TitleComponent, TooltipComponent, LegendComponent, CanvasRenderer]);

const facts = ref([
  "Over 5 Lakh+ Students Are Currently Pursuing an Online MBA in India.",
  "Online MBA Students Save Over 500 Hours.",
  "You Can Attend Classes from Anywhere — Even the Mountains!",
  "65%+ of Online MBA Students Are Working Professionals.",
  "Online MBAs Offer 40+ Specializations.",
  "Companies Are Hiring Online MBA Graduates.",
  "You Can Do an Online MBA for Under ₹1 Lakh.",
]);

const benefits = ref([
  "100% Flexibility",
  "Hybrid Option Available",
  "Cost-Effectiveness",
  "10+ Specializations",
  "Capstone Project",
  "Attractive Scholarships",
]);

const COLORS = ["#ef4444", "#fca5a5", "#f87171", "#fecaca"];

const chartOption = ref({
  tooltip: {
    trigger: "item",
    formatter: "{b}: {c} ({d}%)",
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: "People Choosing Online MBA",
      type: "pie",
      radius: ["75%", "40%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 5,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: { show: false },
      labelLine: { show: false },
      color: COLORS,
      data: [
        { value: 65, name: "Working Professionals (25–35 yrs)" },
        { value: 20, name: "Fresh Graduates (21–24 yrs)" },
        { value: 10, name: "Entrepreneurs / Self-employed" },
        { value: 5, name: "Career Switchers (35+ yrs)" },
      ],
    },
  ],
});
</script>

<template>
  <div class="bg-[#fafafa91] p-6 rounded-2xl w-[52rem] shadow-sm flex gap-6">
    <!-- Left Side -->
    <div class="w-[22.438rem] bg-white rounded-xl p-4 h-fit">
      <div class="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-t-lg -m-4 mb-4">
        Trends, Facts & Figures of Online MBA in India
      </div>
      <div class="flex flex-col gap-3">
        <div
          v-for="(fact, index) in facts"
          :key="index"
          class="border border-neutral-200 rounded-lg px-3 py-2 text-[0.675rem] text-neutral-700 bg-neutral-50 hover:bg-neutral-100 transition"
        >
          {{ fact }}
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div class="bg-white rounded-xl flex flex-col items-center">
      <div class="w-[17.875rem] h-[17.308rem] shadow-2xl rounded-2xl p-4 flex flex-col items-center">
        <h3 class="text-xs font-semibold text-neutral-700 mb-2">
          Graph of people choosing Online MBA
        </h3>

        <div class="w-[200px] h-[200px]">
          <v-chart :option="chartOption" autoresize />
        </div>

        <ul class="text-[0.5rem] text-neutral-700 w-full px-2 mt-2">
          <li
            v-for="(item, index) in chartOption.series?.[0]?.data"
            :key="index"
            class="flex items-center gap-2 py-1.5"
          >
            <span
              class="w-2 h-2 rounded-full inline-block"
              :style="{ backgroundColor: COLORS[index] }"
            ></span>
            {{ item.name }} - {{ item.value }}%
          </li>
        </ul>
      </div>

      <div class="text-left w-full mt-3 p-4 bg-white">
        <h4 class="text-sm font-semibold text-neutral-800 mb-2">
          Make Your Future Secure With Us
        </h4>
        <ul class="text-xs text-neutral-700 space-y-3">
          <li
            v-for="(b, i) in benefits"
            :key="i"
            class="flex items-center gap-2"
          >
            <span class="text-green-500 font-bold">✓</span>
            {{ b }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-chart {
  width: 100%;
  height: 100%;
}
</style>
