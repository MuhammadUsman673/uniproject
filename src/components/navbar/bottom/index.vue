<template>
  <div
    class="fixed bottom-0 w-screen bg-white z-50 lg:hidden transition-transform duration-300"
    :class="hidden ? 'translate-y-[130%]' : 'translate-y-0'"
  >
    <div class="bg-white border-t border-neutral-200 shadow-md">
      <div class="flex items-center justify-between px-4 py-2">
        <!-- Home -->
        <div class="flex flex-col items-center flex-1 transition-transform hover:scale-105">
          <Home class="text-neutral-600 w-5 h-5" />
          <span class="text-[10px] text-neutral-600 font-medium">Home</span>
        </div>

        <!-- Call -->
        <div class="flex flex-col items-center flex-1 transition-transform hover:scale-105">
          <Phone class="text-[#EC1E24] w-5 h-5" />
          <span class="text-[10px] text-[#EC1E24] font-medium">Call</span>
        </div>

        <!-- Chat -->
        <div class="flex flex-col items-center flex-1 transition-transform hover:scale-105">
          <MessageCircle class="text-neutral-600 w-5 h-5" />
          <span class="text-[10px] text-neutral-600 font-medium">Chat</span>
        </div>

        <!-- Universities -->
        <div class="relative flex flex-col items-center flex-1 transition-transform hover:scale-105">
          <Building2 class="text-neutral-600 w-5 h-5" />
          <span class="text-[10px] text-neutral-600 font-medium">Universities</span>

          <!-- Compare Now Button -->
          <div class="absolute -top-6 w-22">
            <router-link
              to="/comp"
              class="bg-[#EC1E24] text-white px-2 py-0.5 rounded-full text-[8px] font-medium shadow-md hover:bg-[#d61a1f] transition-colors duration-200"
            >
              ⚖ Compare Now
            </router-link>
          </div>
        </div>

        <!-- Guidance -->
        <div class="flex flex-col items-center flex-1 transition-transform hover:scale-105">
          <UserCheck class="text-neutral-600 w-5 h-5" />
          <router-link
            to="/pop-up"
            class="text-[10px] text-neutral-600 font-medium"
          >
            Guidance
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  Home,
  Phone,
  MessageCircle,
  Building2,
  UserCheck,
} from "lucide-vue-next"; // or "lucide-vue" depending on your package

const hidden = ref(false);

onMounted(() => {
  let lastScroll = window.scrollY;

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    hidden.value = currentScroll > lastScroll && currentScroll > 50;
    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  onUnmounted(() => window.removeEventListener("scroll", handleScroll));
});
</script>
