<script setup lang="ts">
import { FOOTER_CONFIG } from "@/store/footer";
</script>

<template>
  <div class="w-fit text-white px-4 py-1.5 font-semibold border border-gray-200 rounded-sm relative">
    <span
      class="absolute -top-3 left-2/6 transform -translate-x-1/2 text-white px-4 py-0.5 rounded-full text-[8px] bg-[#EC1E24]"
    >
      HELPLINE
    </span>
    {{ FOOTER_CONFIG.contact.helpline }}
  </div>
</template>
