<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

defineProps<{
  title: string;
  content: string;
}>();
</script>

<template>
  <Accordion
    type="single"
    collapsible
    class="lg:w-[56.188rem] w-full  bg-[#F9FAFB] border border-[#D2D2D2] rounded-lg"
  >
    <AccordionItem value="item" class="text-base">
      <AccordionTrigger class="h-[4.063rem] items-center border-b border-dashed border-[#D2D2D2] px-6">{{
        title
      }}</AccordionTrigger>
      <AccordionContent class="py-4 px-6">{{ content }}</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
