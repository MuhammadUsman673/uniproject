<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useCompareStore } from "@/store/compareStore";
import { storeToRefs } from "pinia";

const compareStore = useCompareStore();
const { selectedSpecialization } = storeToRefs(compareStore);
const { setSelectedSpecialization, handleNext, handlePrevious } = compareStore;

const specializations = [
  {
    id: "general",
    label: "General Management",
    s_icon_path: "/icons/selected/gm.svg",
    n_icon_path: "/icons/normal/gm.svg",
  },
  {
    id: "industrial",
    label: "Industrial Business",
    s_icon_path: "/icons/selected/ib.svg",
    n_icon_path: "/icons/normal/ib.svg",
  },
  {
    id: "operations",
    label: "Operation Management",
    s_icon_path: "/icons/selected/om.svg",
    n_icon_path: "/icons/normal/om.svg",
  },
  {
    id: "finance",
    label: "Finance",
    s_icon_path: "/icons/selected/finance.svg",
    n_icon_path: "/icons/normal/finance.svg",
  },
  {
    id: "marketing",
    label: "Marketing",
    s_icon_path: "/icons/selected/marketing.svg",
    n_icon_path: "/icons/normal/marketing.svg",
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship",
    s_icon_path: "/icons/selected/entp.svg",
    n_icon_path: "/icons/normal/entp.svg",
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
          >Choose Your Specialization</CardTitle
        >
      </CardHeader>

      <CardContent class="space-y-6">
        <div class="grid grid-cols-2 gap-2">
          <Card
            v-for="specialization in specializations"
            :key="specialization.id"
            class="cursor-pointer transition-all shadow-none h-[122px]"
        
            @click="setSelectedSpecialization(specialization.id)"
          >
            <CardContent
              class="relative grid place-content-center text-center space-y-2 py-1"
            >
              <img
                :src="
                  selectedSpecialization === specialization.id
                    ? specialization.s_icon_path
                    : specialization.n_icon_path
                "
                class="mx-auto h-[2.063rem]"
                :alt="specialization.label"
              />
              <p
                class="text-[0.875rem] lg:text-[1rem] leading-tight font-medium text-[#B8B8B8]"
              >
                {{ specialization.label }}
              </p>

              <!-- Checkbox explicitly handles selection -->
              <Checkbox
                :model-value="selectedSpecialization === specialization.id"
                @update:model-value="
                  () => setSelectedSpecialization(specialization.id)
                "
                class="absolute -top-4 right-2"
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
