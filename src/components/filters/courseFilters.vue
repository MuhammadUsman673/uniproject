<script setup lang="ts">
import { ref, computed } from "vue";
import { Search, ChevronLeft } from "lucide-vue-next";
import clsx from "clsx";
import { useFilterStore } from "@/store/filterStore";
import { courseData } from "@/store/courseData";
import { storeToRefs } from "pinia";

const filterStore = useFilterStore();
const {
  activeFilter,
  activeSubFilter,
  searchQuery,
  currentView,
  expandedFilter,
} = storeToRefs(filterStore);
const {
  setExpandedFilter,
  setCurrentView,
  setActiveSubFilter,
  setActiveFilter,
} = filterStore;

const selectedItem = ref<string | null>(null);
const selectedParentFilter = ref<string | null>(null);
const isTransitioning = ref(false);

const filters = computed(() =>
  Object.keys(courseData).map((name) => ({
    name,
    icon: courseData[name as keyof typeof courseData].icon,
    hasSubItems:
      courseData[name as keyof typeof courseData].subItems.length > 0,
  }))
);

function handleViewTransition(newView: "main" | "details") {
  isTransitioning.value = true;
  setTimeout(() => {
    setCurrentView(newView);
    isTransitioning.value = false;
  }, 150);
}

function handleFilterClick(filterName: string) {
  const hasSubItems =
    courseData[filterName as keyof typeof courseData]?.subItems.length > 0;

  if (hasSubItems) {
    const isCurrentlyExpanded = expandedFilter.value === filterName;

    setActiveFilter(isCurrentlyExpanded ? null : filterName);
    setExpandedFilter(isCurrentlyExpanded ? null : filterName);

  
  } else {
  
    
    setActiveFilter(activeFilter.value === filterName ? null : filterName);
  }
}

function handleSubItemClick(subItem: string, parentFilter: string) {
  const hasSpecializations =
    courseData[parentFilter as keyof typeof courseData]?.specializations?.[
      subItem
    ];
  if (hasSpecializations) {
    selectedItem.value = subItem;
    selectedParentFilter.value = parentFilter;
    handleViewTransition("details");
  } else {
    setActiveSubFilter(activeSubFilter.value === subItem ? null : subItem);
  }
}

function handleSpecializationClick(specialization: string) {
  setActiveSubFilter(
    specialization === activeSubFilter.value ? null: specialization
  );
}

function handleBack() {
  handleViewTransition("main");
  selectedItem.value = null;
  selectedParentFilter.value = null;
}

const filtered = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return filters.value.filter((f) => {
    if (f.name.toLowerCase().includes(query)) return true;
    const subItems =
      courseData[f.name as keyof typeof courseData]?.subItems || [];
    return subItems.some((s) => s.toLowerCase().includes(query));
  });
});
</script>

<template>
  <div class="shadow-md transition-all duration-500">
    <div
      class="bg-gradient-to-b from-white to-[#EFEFEF] shadow-md shadow-neutral-200 rounded-md pt-4 w-full"
    >
      <div
        class="flex gap-1 px-2 justify-center items-center text-neutral-600 text-[0.875rem] mb-4"
      >
        <button
          v-if="currentView === 'details'"
          @click="handleBack"
          class="hover:bg-gray-100 rounded-full transition-all duration-300"
        >
          <ChevronLeft :size="18" class="text-gray-600" />
        </button>
        Courses &amp; Specializations
      </div>

      <div class="relative mb-6 px-4 lg:px-3">
        <input
          type="text"
          placeholder="Search here..."
          v-model="searchQuery"
          class="w-full px-4 py-1 text-xs border border-neutral-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-300"
        />
        <Search
          :size="14"
          class="absolute right-8 top-1.5 text-neutral-300 hover:text-[#EC1E24]"
        />
      </div>

      <div class="pb-3 relative overflow-hidden">
        <!-- MAIN VIEW -->
        <Transition name="fade" mode="out-in">
          <div v-if="currentView === 'main'" key="main">
            <div class="space-y-1 h-fit">
              <div
                v-for="(filter, index) in filtered"
                :key="index"
                class="relative px-2"
              >
                <div
                  :class="
                    clsx(
                      'flex items-center gap-2 px-4 py-1 rounded-full cursor-pointer transition-all duration-300',
                      activeFilter === filter.name
                        ? 'bg-[#EC1E24] text-white scale-[1.02]'
                        : 'text-[#282529] hover:scale-[1.02]'
                    )
                  "
                  @click="handleFilterClick(filter.name)"
                >
                  <span class="text-[1rem]">
                    <component :is="filter.icon" />
                  </span>
                  <span class="text-[0.875rem] flex-1">{{ filter.name }}</span>
                </div>

                <div
                  v-if="filter.hasSubItems"
                  :class="
                    clsx(
                      'overflow-hidden relative transition-all duration-500 ease-out',
                      expandedFilter === filter.name
                        ? 'max-h-96 opacity-100 mt-2'
                        : 'max-h-0 opacity-0'
                    )
                  "
                >
                  <div
                    class="absolute h-[calc(100%-37px)] left-6 w-0.5 bg-[#CECECE] mt-4.5 z-10"
                  ></div>
                  <div class="rounded-xl p-2 space-y-1">
                    <div
                      v-for="subItem in courseData[filter.name as keyof typeof courseData]?.subItems"
                      :key="subItem"
                      :class="
                        clsx(
                          'flex items-center gap-3 pr-6 pl-[15px] py-1 cursor-pointer',
                          activeSubFilter === subItem
                            ? 'text-red-600'
                            : 'text-neutral-700'
                        )
                      "
                      @click="handleSubItemClick(subItem, filter.name)"
                    >
                      <div
                        :class="
                          clsx(
                            'w-1 h-4 z-20 flex items-center justify-center rounded-4xl',
                            activeSubFilter === subItem
                              ? 'bg-[#EC1E24]'
                              : 'border-[#EC1E24]'
                          )
                        "
                      ></div>
                      <span class="w-1"></span>
                      <div
                        :class="
                          clsx(
                            'w-2 h-2 rounded-full border-[2px] flex items-center justify-center',
                            activeSubFilter === subItem
                              ? 'border-[#EC1E24]'
                              : 'border-[#aaaaaa]'
                          )
                        "
                      ></div>
                      <span class="flex-1 text-[0.875rem] text-[#282529]">
                        {{ subItem }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- DETAILS VIEW -->
          <div v-else key="details">
            <div
              class="space-y-2 transition-all duration-300"
              :class="
                isTransitioning
                  ? 'opacity-0 -translate-x-4'
                  : 'opacity-100 translate-x-0'
              "
            >
              <div class="flex flex-col gap-3 px-7">
                <div
                  class="flex items-center gap-1 cursor-pointer text-[0.875rem]"
                >
                  <div
                    class="w-2 h-2 rounded-full border-[2px] mr-2 flex items-center justify-center border-[#EC1E24]"
                  ></div>
                  <span class="text-[#8F8E90]">{{ selectedItem }}</span>
                </div>
                <hr />
              </div>

              <div
                v-for="(specialization, index) in (selectedParentFilter && selectedItem
                  ? courseData[selectedParentFilter as keyof typeof courseData]?.specializations?.[selectedItem as string]
                  : [])"
                :key="index"
                class="relative px-7"
              >
                <div
                  class="flex items-center gap-3 cursor-pointer text-[0.875rem]"
                  @click="handleSpecializationClick(specialization)"
                >
                  <div
                    :class="
                      clsx(
                        'w-2 h-2 rounded-full border-[2px] flex items-center justify-center',
                        activeSubFilter === specialization
                          ? 'border-[#EC1E24]'
                          : 'border-[#aaaaaa]'
                      )
                    "
                  ></div>
                  <span class="text-[#5e5e5f]">{{ specialization }}</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}
</style>