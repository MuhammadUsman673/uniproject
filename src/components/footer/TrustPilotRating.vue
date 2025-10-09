<script setup lang="ts">
import { StarIcon } from "lucide-vue-next";
import { FOOTER_CONFIG } from "@/store/footer";
</script>

<template>
  <div
    class="flex items-center space-x-0 bg-white w-[244px] h-[62px] text-black p-2 pr-10 rounded-xl"
  >
    <img src="/logo/trustpilot.svg" />
    <span
      class="h-[24px] w-[48px] text-xs ml-5 px-1 items-center bg-neutral-800 flex text-white gap-2"
    >
      {{ FOOTER_CONFIG.contact.trustpilot.rating }}
      <StarIcon :size="18" color="transparent" fill="#FBD033" />
    </span>
  </div>
</template>
