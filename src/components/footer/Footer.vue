<script setup lang="ts">
import { FOOTER_CONFIG } from "@/store/footer";
import ActionButton from "./ActionButton.vue";
import SocialIcon from "./SocialIcon.vue";
import NavigationSection from "./NavigationSection.vue";
import ProgramSection from "./ProgramSection.vue";
import TrustpilotRating from "./TrustPilotRating.vue";
import HelplineNumber from "./HelplineNumber.vue";
</script>

<template>
  <div class="max-w-[1536px] mx-auto text-neutral-200 py-10">
    <!-- Header -->
    <header
      class="flex flex-row justify-between overflow-hidden relative rounded-2xl items-center h-[6.8rem] md:h-[10.5rem] lg:h-[13.3rem] px-2 md:px-4 lg:px-10 bg-[#192E5D] bg-opacity-90 mx-4 lg:mx-4"
    >
      <div class="flex items-center">
        <h1 class="ml-2 text-[1.25rem] md:text-3xl lg:text-5xl font-semibold">
          {{ FOOTER_CONFIG.header.title }}
        </h1>
      </div>

      <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 z-[999]">
        <ActionButton
          v-for="button in FOOTER_CONFIG.header.buttons"
          :key="button.id"
          :button="button"
        />
      </div>

      <img src="/Shape.svg" alt="" class="hidden md:block absolute w-full left-0 h-[212px]" />
      <img src="/Shape-M.svg" alt="" class="md:hidden absolute w-full h-[200px] -top-12 left-0" />
    </header>

    <!-- Main -->
    <main class="p-4 md:p-15">
      <div class="grid lg:grid-cols-3 gap-y-4 gap-x-10">
        <!-- Contact and Social -->
        <div class="flex flex-col gap-6 my-3">
          <div class="flex gap-4">
            <img
              v-for="(logo, i) in FOOTER_CONFIG.contact.logos"
              :key="i"
              :src="logo.src"
              :alt="logo.alt"
              class="h-8"
            />
          </div>

          <TrustpilotRating />

          <div class="flex gap-4 lg:block items-center">
            <div class="flex space-x-2 lg:mb-8">
              <SocialIcon
                v-for="(social, i) in FOOTER_CONFIG.contact.socialMedia"
                :key="i"
                :social="social"
              />
            </div>
            <HelplineNumber />
          </div>
        </div>

        <!-- Navigation -->
        <NavigationSection :section="FOOTER_CONFIG.navigation.company" />
        <NavigationSection :section="FOOTER_CONFIG.navigation.quickLinks" />
      </div>

      <div class="h-1 my-10 lg:my-20 border-b w-full" />

      <!-- Programs -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-y-15">
        <ProgramSection
          v-for="(program, i) in FOOTER_CONFIG.programs"
          :key="i"
          :program="program"
        />
      </div>

      <div class="h-1 my-10 lg:my-20 border-b w-full" />

      <!-- Specializations -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-y-15">
        <ProgramSection
          v-for="(spec, i) in FOOTER_CONFIG.specializations"
          :key="i"
          :program="spec"
        />
      </div>
    </main>
  </div>
</template>
