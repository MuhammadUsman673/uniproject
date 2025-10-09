<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-vue-next";
import { Badge } from "@/components/ui/badge";

const stars = [1, 2, 3, 4];
</script>

<template>
  <Card
    class="border-none shadow-none w-full p-0 m-0 min-h-[8.5rem] rounded-none rounded-t-2xl"
  >
    <CardContent class="pt-8">
      <div class="flex flex-wrap justify-around gap-8 items-center">
        <!-- Left Section -->
        <div class="order-3 lg:order-1">
          <h3 class="text-[1.25rem] font-bold text-[#282529] mb-2">
            Clikpick is your trusted tool!
          </h3>
          <p class="text-[0.75rem] text-[#282529]">
            Round the clock verified and supervised verified
            <br />
            answers via our IIT Testers.
          </p>
        </div>

        <!-- Center: Rating Stars -->
        <div class="text-center w-fit start-0 order-2 lg:order-2">
          <div class="flex justify-center mb-2">
            <span v-for="star in stars" :key="star" class="w-[53px]">
              <Star class="fill-[#FBAD33] stroke-[#FBAD33]" :size="43" />
            </span>

            <div class="relative w-11">
              <span class="absolute top-0 left-0 z-0">
                <Star class="fill-[#e4e4e4] stroke-[#e4e4e4]" :size="43" />
              </span>

              <span class="absolute top-0 left-0 z-10">
                <StarHalf class="fill-[#FBAD33] stroke-[#FBAD33]" :size="43" />
              </span>
            </div>
          </div>
          <p class="text-[0.63rem] text-[#282529]">Google Review Rating</p>
        </div>

        <!-- Right Section: Stats -->
        <div class="flex justify-center gap-14 order-2 lg:order-3">
          <div class="text-center">
            <Badge
              variant="outline"
              class="text-[1.5rem] font-bold text-theme border-0 mb-1"
            >
              150+
            </Badge>
            <p class="text-[0.63rem] text-[#282529]">Verified Programs</p>
          </div>

          <div class="text-center">
            <Badge
              variant="outline"
              class="text-[1.5rem] font-bold text-theme border-0 mb-1"
            >
              100+
            </Badge>
            <p class="text-[0.63rem] text-[#282529]">Recognized Universities</p>
          </div>

          <div class="text-center">
            <Badge
              variant="outline"
              class="text-[1.5rem] font-bold text-theme border-0 mb-1"
            >
              95%
            </Badge>
            <p class="text-[0.63rem] text-[#282529]">
              of students who strongly believe in signing
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
