<script setup lang="ts">
import { ref } from "vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { PieChart, BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([
  PieChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
]);

const pieOption = ref({
  tooltip: { trigger: "item" },
  series: [
    {
      type: "pie",
      radius: ["90%", "0%"],
      startAngle: 90,
      endAngle: 100,
      data: [
        {
          value: 90,
          name: "Accepted by recruiters",
          itemStyle: { color: "#ef4444" },
        },
        { value: 10, name: "Remaining", itemStyle: { color: "#f3f3f3" } },
      ],
    },
  ],
});

const careers = ref([
  { name: "Brand Management", percent: 89 },
  { name: "Product Marketing", percent: 70 },
  { name: "Sales & Business Development", percent: 62 },
  { name: "Market Research", percent: 48 },
  { name: "Advertising Strategy", percent: 34 },
  { name: "Consulting", percent: 20 },
  { name: "PR/Corporate Communications", percent: 10 },
]);

const barOption = ref({
  grid: { left: 80, right: 20, top: 10, bottom: 30 },
  xAxis: {
    type: "value",
    max: 100,
    axisLabel: { formatter: "{value}%" },
    splitLine: { show: false },
  },
  yAxis: {
    type: "category",
    data: careers.value.map((c) => c.name),
    axisLabel: { fontSize: 5, color: "#444" },
  },
  series: [
    {
      type: "bar",
      data: careers.value.map((c) => c.percent),
      barWidth: 4,
      itemStyle: {
        color: "#EB4848",
        borderRadius: [10, 10, 10, 10],
      },
    },
  ],
});
</script>

<template>
  <div
    class="relative w-[791px] h-[518px] bg-[#F8F8F8] rounded-2xl overflow-hidden"
  >
    <!-- Background Circle -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="w-[30rem] h-[30rem] bg-red-100/20 rounded-full absolute"
      ></div>
    </div>

    <!-- Pie Chart -->
    <div
      class="absolute w-[9.125rem] h-[6.313rem] top-8 left-20 z-[999] bg-white rounded-xl shadow-md p-3 text-center"
    >
      <div class="w-full h-[70px]">
        <v-chart :option="pieOption" autoresize />
      </div>
      <p
        class="absolute left-1/2 -translate-x-1/2 bottom-7 text-[white] text-sm font-semibold"
      >
        90%
      </p>
      <p class="text-[0.625rem] text-neutral-600">Accepted by recruiters.</p>
    </div>

    <!-- Salary uplift -->
    <div
      class="absolute w-[178px] h-[98px] flex flex-col top-12 right-44 z-[999] bg-white rounded-xl shadow-lg py-2 px-2 text-center"
    >
      <img src="/icons/money.svg" class="h-5 w-4 ml-1" />
      <div
        class="border-2 border-neutral-300 mt-2 p-2 w-[164px] h-[59px] rounded-xl"
      >
        <p class="text-[0.625rem] font-medium text-neutral-700 mb-1">
          Salary uplift
        </p>
        <div
          class="relative rounded-md w-full h-[19px] bg-red-100 text-[0.625rem] font-semibold text-[#CB1015] inline-block"
        >
          <div class="h-[19px] w-[67%] bg-[#ec5257]" />
          <span
            class="absolute left-1/2 -translate-x-1/2 text-white top-1/2 -translate-y-1/2"
          >
            40–70%
          </span>
        </div>
      </div>
    </div>

    <!-- New Marketing Formula -->
    <div
      class="absolute w-[151px] h-[104px] bottom-48 z-[999] left-6 bg-white rounded-xl shadow-lg p-3 text-center"
    >
      <p class="text-[0.5rem] text-neutral-700 bg-red-50 py-[1px]">
        Psychology
      </p>
      <p class="text-[0.5rem] text-neutral-500 py-[1px]">+</p>
      <p class="text-[0.5rem] text-neutral-700 py-[1px] bg-red-50">Data</p>
      <p class="text-[0.5rem] text-neutral-700 py-[1px]">=</p>
      <div
        class="mt-2 bg-[#CB1015] text-white text-[0.5rem] font-semibold py-1.5 rounded-full"
      >
        The New Marketing Formula
      </div>
    </div>

    <!-- Chosen Specialization -->
    <div
      class="absolute h-[49px] bottom-52 right-48 z-[999] bg-white rounded-xl shadow-md flex items-center gap-2 px-3 py-1"
    >
      <div
        class="bg-[#CB1015] text-white text-[1rem] font-bold rounded-full px-2 py-1.5"
      >
        #1
      </div>
      <span class="text-[0.625rem] text-neutral-700 w-28">
        Chosen Specialization in Online MBA
      </span>
    </div>

    <!-- Main Chart -->
    <div
      class="absolute top-1/2 -translate-y-1/2 left-2/5 transform -translate-x-1/2 w-[18.8rem] h-[17rem] bg-white rounded-xl shadow-lg p-5"
    >
      <h3
        class="text-[0.625rem] font-semibold text-neutral-400 mb-4 w-40 text-center mx-auto"
      >
        Top Careers for Online MBA in
        <span class="text-neutral-500">Marketing</span> Students
      </h3>
      <v-chart
        :option="barOption"
        autoresize
        style="width: 100%; height: 200px"
      />
    </div>
  </div>
</template>

<style scoped>
.v-chart {
  width: 100%;
  height: 100%;
}
</style>
