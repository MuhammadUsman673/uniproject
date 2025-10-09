<script setup lang="ts">
import { FOOTER_CONFIG } from "@/store/footer";
</script>

<template>
  <div class="relative h-full lg:h-[40rem] bg-gradient-to-b from-[#001136] to-slate-950 overflow-hidden">
    <!-- Background city image overlay -->
    <div
      class="h-1 bg-[#001136] relative z-1"
      style="box-shadow: 0 20px 200px 200px #001136;"
    ></div>

    <div
      class="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: 'url(/images/footer-bg.png)' }"
    ></div>

    <!-- Content -->
    <div class="relative z-10 flex items-center justify-center min-h-[400px] px-8 py-16">
      <div class="max-w-6xl text-center text-gray-200">
        <!-- Header links / disclaimer -->
        <div class="mb-8">
          <div class="flex justify-center space-x-2 text-sm font-medium z-50">
            {{ FOOTER_CONFIG.legal.disclaimer }}
          </div>
        </div>

        <!-- Main disclaimer text -->
        <div class="space-y-6 text-sm leading-9 text-white">
          <p>{{ FOOTER_CONFIG.legal.content }}</p>
        </div>

        <!-- Copyright -->
        <div class="mt-12 pt-4">
          <p class="text-sm font-medium">
            {{ FOOTER_CONFIG.legal.copyright }}
          </p>
        </div>
      </div>
    </div>

    <!-- Subtle glow effects -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
  </div>
</template>
