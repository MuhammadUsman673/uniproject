<script lang="ts" setup>
interface Props {
  image_url?: string;
  title?: string;
  courseType?: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  image_url: "/images/blogs/default.png",
  title: "Untitled Course",
  courseType: "General",
  color: "bg-red-100",
});
</script>

<template>
  <div class="flex gap-6">
    <img
      :src="props.image_url"
      class="w-[9.813rem] h-[4.875rem]"
      :alt="props.title"
    />
    <div>
      <span :class="['text-[0.688rem]', props.color]">{{
        props.courseType
      }}</span>
      <h6 class="text-[1.125rem] font-medium line-clamp-2 ">
        {{ props.title }}
      </h6>
    </div>
  </div>
</template>
