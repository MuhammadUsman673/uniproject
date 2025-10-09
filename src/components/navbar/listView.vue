<template>
  <li>
    <router-link
      :to="to"
      class="block rounded-md p-2 hover:bg-gray-50 transition"
    >
      <div class="text-sm font-medium leading-none">{{ title }}</div>
      <p class="text-sm text-gray-500 line-clamp-2 leading-snug">
        <slot />
      </p>
    </router-link>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
  title: string;
}>();
</script>
