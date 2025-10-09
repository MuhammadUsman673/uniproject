<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


import "@/../public/css/no-scroll.css";
import { Checkbox } from "@/components/ui/checkbox";
import BasicDetails from "@/components/chartCards/basic.vue";
import StudyPathChart from "@/components/chartCards/selectedStudyPathChart.vue";
import OnlineCourseChart from "@/components/chartCards/selectedCourseChart.vue";
import SpecializationChart from "@/components/chartCards/selectedSpecializationChart.vue";
import { useCompareStore } from "@/store/compareStore";
import CompareRatings from "@/components/cards/CompareRatings.vue";
import HiringBrands from "@/components/cards/HiringBrands.vue";
import PathSection from "@/components/compare/PathSection.vue";
import CourseSection from "@/components/compare/CourseSection.vue";
import SpecializationSection from "@/components/compare/SpecializationSection.vue";
import UniSection from "@/components/compare/UniSection.vue";
import { storeToRefs } from "pinia";

const compareStore = useCompareStore();
const { currentStep, selectedCourse, selectedPath, selectedUniversity, selectedSpecialization } = storeToRefs(compareStore);


const renderSection = () => {    
    console.log(currentStep.value,selectedPath.value);
    
  switch (currentStep.value) {
    case "path":
      return PathSection;
    case "course":
      return CourseSection;
    case "specialization":
      return SpecializationSection;
    case "compare":
      return UniSection;
    default:
      return PathSection;
  }
};
</script>

<template>
    <div class="pt-10 pb-6 lg:py-20">
      <!-- Main Content -->
      <main class="relative mx-auto">
        <!-- Hero Section -->
        <div class="relative z-30 text-center mb-4 lg:mb-16">
          <h1 class="text-[2.25rem] lg:text-[4rem] font-bold text-gray-900 mb-4">
            Compare with CS ClikPick
          </h1>
          <p class="text-[#282529] text-[1rem] lg:text-[1.25rem]">
            Get insights, compare and find your perfect Specialization
            <br class="hidden sm:block" />
            within seconds
          </p>
        </div>

        <!-- Main Card Section -->
        <div class="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <!-- Left Side - Illustration Card -->
          <div class="hidden lg:block z-30 absolute top-76 left-24">
            <StudyPathChart v-if="currentStep === 'path' && selectedPath" />
            <OnlineCourseChart v-else-if="currentStep === 'course' && selectedCourse" />
            <SpecializationChart v-else-if="currentStep === 'specialization' && selectedSpecialization" />
            <img v-else-if="currentStep === 'compare' && selectedUniversity.length" src="/images/cmp-3.png" alt="Compare" />
            <BasicDetails v-else />
          </div>

          <!-- Empty div for layout -->
          <div></div>

          <!-- Right Side - Selection Card -->
          <div class="z-[999] lg:ml-20">
            <component :is="renderSection()" />
          </div>
        </div>

        <!-- Companies Section -->
        <div class="relative z-[9999]">
          <HiringBrands />
        </div>

        <!-- Trust Section -->
        <CompareRatings />

        <!-- Decorative Elements -->
        <div class="absolute top-[28rem] left-[30rem] w-0 h-2 rounded-full shadow-[0px_0px_300px_300px_#FFF5DC] z-10"></div>
        <div class="absolute lg:top-[40rem] top-[28rem] left-40 w-0 h-2 rounded-full shadow-[0px_0px_500px_500px_#FCD6D6]/60 lg:shadow-[0px_0px_300px_300px_#FCD6D6] z-10"></div>
        <div class="absolute top-[34rem] right-[28rem] w-0 h-2 rounded-full shadow-[0px_0px_300px_300px_#FCD6D6] z-40 hidden lg:block"></div>
        <div class="absolute bottom-[24rem] left-0 w-1/2 h-0 rounded-full shadow-[0px_0px_200px_100px_#FCD6D6] z-40 hidden lg:block"></div>
        <div class="absolute top-[48rem] right-5 w-0 h-2 rounded-full shadow-[0px_0px_300px_300px_#FBF0D3] z-50 hidden lg:block"></div>
      </main>
    </div>
 
</template>