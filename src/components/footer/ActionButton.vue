<script setup lang="ts">
import { defineProps } from "vue";
import { FOOTER_CONFIG } from "@/store/footer";
import Button from "../ui/button/Button.vue";

const props = defineProps<{
  button: (typeof FOOTER_CONFIG.header.buttons)[number];
}>();

function handleClick() {
  globalThis.window.location.href = props.button.path;
}
</script>

<template>
  <Button
    :variant="button.variant"
    :class="[
      'text-xs md:text-base z-[999] w-[146px] h-[33px] lg:text-lg lg:w-70 md:w-52 md:h-[4rem] lg:h-[5rem] rounded-lg lg:rounded-3xl flex items-center justify-center',
      button.className,
    ]"
    @click="handleClick"
  >
    <component :is="button.icon" class="mr-1" />
    <span>{{ button.text }}</span>
  </Button>
</template>
