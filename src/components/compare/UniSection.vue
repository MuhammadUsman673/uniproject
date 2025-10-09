<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useCompareStore } from "@/store/compareStore";
import { storeToRefs } from "pinia";

const compareStore = useCompareStore();
const { selectedUniversity } = storeToRefs(compareStore);
const { handlePrevious, toggleUniversity } = compareStore;

const universities = [
  { id: "u1", icon: "/icons/u1.png" },
  { id: "u2", icon: "/icons/u2.png" },
  { id: "u3", icon: "/icons/u3.png" },
  { id: "u4", icon: "/icons/u4.png" },
  { id: "u5", icon: "/icons/u5.png" },
  { id: "u6", icon: "/icons/u6.png" },
];

// Central toggle handler with max 3 limit
</script>

<template>
  <div
    class="grid lg:w-[29.625rem] h-[37.188rem] border-3 rounded-2xl border-white z-50 m-2"
  >
    <Card class="shadow-xl md:h-[35.688rem] lg:w-[28rem] m-2">
      <CardHeader>
        <CardTitle class="text-[1.25rem] text-center">
          Compare the best online universities!
        </CardTitle>
      </CardHeader>

      <CardContent class="space-y-6">
        <div class="grid grid-cols-2 gap-2">
          <Card
            v-for="university in universities"
            :key="university.id"
            class="cursor-pointer transition-all shadow-none py-8 border "
            @click="toggleUniversity(university.id)"
          >
            <CardContent
              class="relative grid place-content-center text-center h-[3.5rem] py-1"
            >
              <img :src="university.icon" class="mx-auto" />

              <Checkbox
                :model-value="selectedUniversity.includes(university.id)"
                @update:model-value="() => toggleUniversity(university.id)"
                class="absolute -top-4 right-2"
                @click="toggleUniversity(university.id)"
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
            class="flex-1 text-lg font-medium h-[3.438rem]"
          >
            Compare
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
