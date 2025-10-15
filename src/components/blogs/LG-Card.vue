<script setup lang="ts">
import { Clock, Sparkles } from "lucide-vue-next";

interface Props {
  image_url?: string;
  title?: string;
  category?: string;
  courseType?: string;
  after?: string;
  readDuration?: number;
  views?: string;
}

const props = withDefaults(defineProps<Props>(), {
  image_url: "/images/blogs/default.png",
  title: "Untitled Course",
  category: "General",
  courseType: "Online",
  after: "After -",
  readDuration: 5,
  views: "0",
});
</script>

<template>
  <div
    class="w-[23rem] rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200"
  >
    <img
      :src="props.image_url"
      :alt="props.title"
      class="h-[11.5rem] w-full object-cover"
    />

    <div class="px-5">
      <div class="flex gap-6 pb-3 pt-8 text-[0.813rem] text-neutral-600">
        <span>{{ props.courseType }}</span>
        <span class="text-theme font-medium">{{ props.category }}</span>
        <span>{{ props.after }}</span>
      </div>

      <h2 class="text-[1.5rem] font-semibold line-clamp-3 text-[#282529]">
        {{ props.title }}
      </h2>

      <div class="flex gap-6 py-3 text-[#949494] text-xs">
        <span class="flex items-center gap-1">
          <Sparkles :size="12" />
          {{ props.views }} views
        </span>
        <span class="flex items-center gap-1">
          <Clock :size="12" />
          {{ props.readDuration }} min read
        </span>
      </div>
    </div>
  </div>
</template>
