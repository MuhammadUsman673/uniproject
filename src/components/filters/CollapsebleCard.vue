<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import clsx from "clsx";

interface Props {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="clsx(
      'mt-4 px-5 bg-gradient-to-b from-white to-[#EFEFEF] shadow-md shadow-neutral-200 rounded-md',
      isOpen && 'py-4'
    )"
  >
    <div
      @click="onToggle"
      :class="clsx('flex justify-between items-center cursor-pointer', !isOpen && 'py-4')"
    >
      <h2 class="text-[0.875rem] text-[#282529]/80">{{ title }}</h2>
      <span
        :class="[
          'text-[#282529] transform transition-transform duration-300',
          isOpen ? 'rotate-180' : ''
        ]"
      >
        <ChevronDown />
      </span>
    </div>

    <div
      :class="[
        'transition-all duration-300 overflow-hidden',
        isOpen ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'
      ]"
    >
      <slot />
    </div>
  </div>
</template>
