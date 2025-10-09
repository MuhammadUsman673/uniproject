<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCompareStore } from "@/store/compareStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import "@/../public/css/styled-scroll.css"
const compareStore = useCompareStore();
const { selectedPath } = storeToRefs(compareStore);
const { setSelectedPath, handleNext } = compareStore;

const studyPaths = [
  {
    id: "ug",
    label: "UG",
    n_icon_path: "/icons/normal/hat.svg",
    s_icon_path: "/icons/selected/hat.svg",
  },
  {
    id: "pg",
    label: "PG",
    n_icon_path: "/icons/normal/degree.svg",
    s_icon_path: "/icons/selected/degree.svg",
  },
  {
    id: "executive",
    label: "Executive Programs",
    n_icon_path: "/icons/normal/e-program.svg",
    s_icon_path: "/icons/selected/e-program.svg",
  },
  {
    id: "certifications",
    label: "Certifications",
    n_icon_path: "/icons/normal/cert.svg",
    s_icon_path: "/icons/selected/cert.svg",
  },
  {
    id: "law",
    label: "Law",
    n_icon_path: "/icons/normal/law.svg",
    s_icon_path: "/icons/selected/law.svg",
  },
  {
    id: "doctorfate",
    label: "Doctorate/Ph.D.",
    n_icon_path: "/icons/normal/doctor.svg",
    s_icon_path: "/icons/selected/doctor.svg",
  },
  {
    id: "doctotrate",
    label: "Doctorate/Ph.D.",
    n_icon_path: "/icons/normal/doctor.svg",
    s_icon_path: "/icons/selected/doctor.svg",
  },
  {
    id: "docto8rate",
    label: "Doctorate/Ph.D.",
    n_icon_path: "/icons/normal/doctor.svg",
    s_icon_path: "/icons/selected/doctor.svg",
  },
];
</script>

<template>
  <div
    class="grid lg:w-[29.625rem] h-[37.188rem] border-3 rounded-2xl border-white z-50 m-2"
  >
    <Card class="shadow-xl h-[35.688rem] lg:w-[28rem] m-2">
      <CardHeader>
        <CardTitle class="text-[1.25rem] text-center"
          >Select Your Study Path</CardTitle
        >
      </CardHeader>

      <CardContent class="space-y-6  ">
        <div class="grid grid-cols-2 gap-2  fancy-scrollbar overflow-y-scroll max-h-[24rem]">
          <Card
            v-for="path in studyPaths"
            :key="path.id"
            class="cursor-pointer transition-all shadow-none h-[122px]"
            @click="setSelectedPath(path.id)"
          >
            <CardContent
              class="relative grid place-content-center text-center space-y-2 py-1"
            >
              <img
                :src="
                  selectedPath === path.id ? path.s_icon_path : path.n_icon_path
                "
                class="mx-auto h-[2.063rem]"
              />
              <p
                class="text-[0.875rem] lg:text-[1rem] leading-tight font-medium text-[#B8B8B8]"
              >
                {{ path.label }}
              </p>
              <Checkbox
                class="absolute -top-4 right-2"
                :model-value="selectedPath === path.id"
                @update:model-value="
                  (checked) => checked && setSelectedPath(path.id)
                "
              />
            </CardContent>
          </Card>
        </div>

        <Button
          variant="destructive"
          size="lg"
          @click="handleNext"
          :disabled="!selectedPath"
          class="w-full text-lg font-medium h-[3.438rem]"
        >
          Next
        </Button>
      </CardContent>
    </Card>
  </div>
</template>


