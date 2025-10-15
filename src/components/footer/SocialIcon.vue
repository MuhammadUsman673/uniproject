<script setup lang="ts">
import { defineProps } from "vue";
import { FOOTER_CONFIG } from "@/store/footer";

 defineProps<{
  social: (typeof FOOTER_CONFIG.contact.socialMedia)[number];
}>();
</script>

<template>
  <router-link
    :to="social.href"
    :aria-label="social.label"
    class="text-neutral-200 bg-[#EC1E24] p-1.5 md:p-2 rounded-full"
  >
    <component :is="social.icon" class="h-4 w-4 lg:h-6 lg:w-6" />
  </router-link>
</template>
