<template>
  <header class="max-w-[1276px] lg:mx-auto mx-3 bg-white px-2 lg:px-6 py-4 lg:py-5 border rounded-2xl shadow-[0px_0px_8px_#c6c6c686]">
    <div class="mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="relative">
        <img src="/logo/main.svg" class="h-8" />
      </div>

      <!-- Centered Menu -->
      <nav class="flex-1 flex justify-center space-x-8 items-center">
        <div class="relative group hidden lg:block">
          <ExploreMenu />
        </div>
      </nav>

      <!-- Hotline & Search -->
      <div class="flex items-center space-x-4">
        <div class="hidden lg:block bg-gradient-to-r from-[#EC1E24] to-[#c41a1f] text-white px-4 py-1.5 font-semibold border border-gray-200 rounded-sm relative">
          <span
            class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFF5F5] text-black px-4 py-0.5 rounded-full text-[8px] border border-[#EC1E24]"
          >
            HELPLINE
          </span>
          9785-800-008
        </div>

        <!-- Search opens modal -->
        <button
          @click="isSearchOpen = true"
          class="flex items-center justify-center gap-2 hover:text-[#EC1E24] transition bg-[#FFF5F5] border border-[#EC1E24] rounded-full px-4 py-1.5"
        >
          <span>Search</span>
          <Search :size="20" class="font-extralight" />
        </button>
      </div>
    </div>
  </header>

  <!-- Search Modal -->
  <Dialog v-model:open="isSearchOpen">
    <DialogContent class="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>Search Universities</DialogTitle>
      </DialogHeader>

      <!-- Search Input -->
      <div class="mt-2">
        <Input
          placeholder="Type to search..."
          v-model="query"
          autofocus
        />
      </div>

      <!-- Search Results -->
      <div class="mt-4 max-h-64 overflow-y-auto">
        <ul v-if="filtered.length" class="space-y-2">
          <li
            v-for="(item, idx) in filtered"
            :key="idx"
            class="p-2 border rounded-md hover:bg-red-50 cursor-pointer transition"
          >
            {{ item }}
          </li>
        </ul>
        <p v-else class="text-gray-500 text-sm">No results found.</p>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search } from 'lucide-vue-next'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import ExploreMenu from './navigationMenu.vue'

const isSearchOpen = ref(false)
const query = ref('')

// Mock data
const data = [
  'Harvard University',
  'Stanford University',
  'MIT',
  'Oxford University',
  'Cambridge University',
  'UC Berkeley',
]

const filtered = computed(() =>
  data.filter(item =>
    item.toLowerCase().includes(query.value.toLowerCase())
  )
)
</script>
