<script setup lang="ts">
import LgCard from "@/components/blogs/LG-Card.vue";
import SMCard from "@/components/blogs/SM-Card.vue";
import Select from "@/components/ui/select/Select.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import { LGCardData, SMCardData } from "@/store/blogs";
</script>

<template>
  <div class="max-w-7xl lg:px-8 px-4 mx-auto">
    <div class="text-center mx-auto py-8">
      <h2 class="text-[2.25rem] font-medium">Collegesathi Blogs</h2>
      <p class="text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incid
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-8 py-8">
      <img
        src="/images/blogs/blog-1.png"
        alt=""
        class="w-full lg:w-[36.688rem] h-full lg:h-[18.313rem]"
      />

      <div class="flex flex-col gap-7">
        <SMCard
          v-for="item in SMCardData"
          :key="item.id"
          :title="item.title"
          :color="item.color"
          :course-type="item.courseType"
          :image_url="item.image_url"
        />
      </div>
    </div>

    <div class="flex justify-between">
      <div>
        <Select>
          <SelectTrigger
            class="text-sm w-full focus-visible:ring-0 border-none "
          >
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="commerce">Commerce</SelectItem>
            <SelectItem value="arts">Arts</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>B</div>
    </div>
    <hr class="mb-16 border-b border-neutral-200" />

    <div class="grid grid-cols-3 justify-between space-y-20">
      <LgCard
        v-for="item in LGCardData"
        :key="item.id"
        :title="item.title"
        :image_url="item.image_url"
        :after="item.after"
        :category="item.category"
        :course-type="item.courseType"
        :views="item.views"
        :read-duration="item.readDuration"
      />
    </div>
  </div>
</template>
