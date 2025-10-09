<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useCompareStore } from "@/store/compareStore";
import { storeToRefs } from "pinia";

const compareStore = useCompareStore();
const { selectedCourse } = storeToRefs(compareStore);
const { setSelectedCourse, handleNext, handlePrevious } = compareStore;

const courses = [
  { id: "mca", label: "MCA", n_icon_path: "/icons/normal/mca.svg", s_icon_path: "/icons/selected/mca.svg" },
  { id: "ma", label: "MA", n_icon_path: "/icons/normal/ma.svg", s_icon_path: "/icons/selected/ma.svg" },
  { id: "mcom", label: "M COM", n_icon_path: "/icons/normal/mcom.svg", s_icon_path: "/icons/selected/mcom.svg" },
  { id: "omba", label: "Online MBA", n_icon_path: "/icons/normal/omba.svg", s_icon_path: "/icons/selected/omba.svg" },
  { id: "emba", label: "Executive MBA", n_icon_path: "/icons/normal/emba.svg", s_icon_path: "/icons/selected/emba.svg" },
  { id: "majmc", label: "MAJMC", n_icon_path: "/icons/normal/majmc.svg", s_icon_path: "/icons/selected/majmc.svg" },
];
</script>

<template>
  <div class="grid lg:w-[29.625rem] h-[37.188rem] border-3 rounded-2xl border-white z-50 m-2">
    <Card class="shadow-xl h-[35.688rem] lg:w-[28rem] m-2">
      <CardHeader>
        <CardTitle class="text-[1.25rem] text-center">
          Choose the Online Course
        </CardTitle>
      </CardHeader>

      <CardContent class="space-y-6">
        <div class="grid grid-cols-2 gap-2">
          <Card
            v-for="course in courses"
            :key="course.id"
            class="cursor-pointer transition-all shadow-none h-[122px]"
             @click="setSelectedCourse(course.id)"
          >
            <CardContent class="relative grid place-content-center text-center space-y-2 py-1">
              <img
                :src="selectedCourse === course.id ? course.s_icon_path : course.n_icon_path"
                class="mx-auto h-[2.063rem]"
              />
              <p class="text-[0.875rem] lg:text-[1rem] leading-tight font-medium text-[#B8B8B8]">
                {{ course.label }}
              </p>
              <Checkbox
                class="absolute -top-4 right-2"
                :model-value="selectedCourse === course.id"
                @update:model-value="checked => checked ? setSelectedCourse(course.id) : setSelectedCourse(null)"
              />
            </CardContent>
          </Card>
        </div>

        <div class="flex gap-2 w-full">
          <Button
            variant="default"
            size="lg"
            @click="handlePrevious"
            class="flex-1 text-lg font-medium h-[3.438rem]"
          >
            Previous
          </Button>

          <Button
            variant="destructive"
            size="lg"
            @click="handleNext"
            class="flex-1 text-lg font-medium h-[3.438rem]"
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
