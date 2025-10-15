<template>
  <div>
    <div class="max-w-[1440px] mx-auto lg:py-6 py-4">
      <Navbar />
      <main>
        <router-view />
      </main>
    </div>

    <div class="bg-[#001136]">
      <Footer />
      <Legal />
    </div>

    <BottomNavigationBar />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/navbar/index.vue";
import Footer from "@/components/footer/Footer.vue";
import Legal from "@/components/footer/legal.vue";
import BottomNavigationBar from "@/components/navbar/bottom/index.vue";
</script>
