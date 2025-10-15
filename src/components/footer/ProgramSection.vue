<script setup lang="ts">
import { defineProps } from "vue";
import { FOOTER_CONFIG } from "@/store/footer";

 defineProps<{
  program:
    | (typeof FOOTER_CONFIG.programs)[number]
    | (typeof FOOTER_CONFIG.specializations)[number];
  showViewAll?: boolean;
}>();
</script>

<template>
  <div>
    <h3 class="text-white font-bold mb-6">{{ program.title }}</h3>
    <ul class="space-y-3">
      <li v-for="(item, i) in program.items" :key="i">{{ item }}</li>
      <li v-if="showViewAll">
        <router-link to="#" class="hover:text-neutral-200">View All</router-link>
      </li>
    </ul>
  </div>
</template>
