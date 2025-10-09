<script setup lang="ts">
import { defineProps } from "vue";


type LinkType = {
  text: string;
  href: string;
  badgeText?: string;
  badge?: boolean;
};

type SectionType = {
  title: string;
  links: readonly LinkType[]; // ✅ make it readonly
};

 defineProps<{
  section: SectionType;
}>();
</script>

<template>
  <div>
    <h3 class="text-white font-bold mb-4">{{ section.title }}</h3>
    <hr class="border-[#EC1E24] border-2 w-50" />
    <ul class="grid grid-cols-2 gap-y-3 mt-3">
      <li v-for="(link, i) in section.links" :key="i">
        <a :href="link.href" class="hover:text-neutral-200">
          {{ link.text }}
          <span v-if="link.badge" class="bg-green-500 p-0.5 rounded text-xs">{{
            link.badgeText
          }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
