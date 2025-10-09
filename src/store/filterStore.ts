import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useResponsive } from "@/hooks/use-responsive";

// ─────────────────────────────
// ✅ Types
// ─────────────────────────────

// Filter categories (example — expand as needed)
export type FilterCategory =
  | "Engineering"
  | "Medical"
  | "Business"
  | "Arts"
  | string;

// Subfilter type
export type SubFilterType = string | null;

// Budget filter options
export type BudgetOption =
  | "Upto 1 Lakh"
  | "1 Lakh - 2 Lakhs"
  | "2 Lakhs - 3 Lakhs"
  | "3 Lakhs+"
  | null;

// Approval types (example)
export type ApprovalType = "AICTE" | "UGC" | "NAAC" | string | null;

// View type
export type ViewType = "main" | "details";

// ─────────────────────────────
// ✅ Store Definition
// ─────────────────────────────
export const useFilterStore = defineStore("filter", () => {
  // Responsive behavior
  const { isMobile, isTablet } = useResponsive();

  // State
  const isOpen = ref<boolean>(isMobile.value || isTablet.value ? true : false);
  const activeFilter = ref<FilterCategory | null>(null);
  const activeSubFilter = ref<SubFilterType>(null);
  const selectedBudget = ref<BudgetOption>(null);
  const selectedApproval = ref<ApprovalType>(null);
  const cardsToShow = ref<number>(9);
  const searchQuery = ref<string>("");
  const currentView = ref<ViewType>("main");
  const openIndex = ref<Set<number>>(new Set());
  const expandedFilter = ref<string | null>(null);

  // ─────────────────────────────
  // ✅ Actions
  // ─────────────────────────────

  const toggleCard = (index: number): void => {
    const newSet = new Set(openIndex.value);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    openIndex.value = newSet;
  };

  const handleClearAll = (): void => {
    activeFilter.value = null;
    activeSubFilter.value = null;
    selectedBudget.value = null;
    selectedApproval.value = null;
    currentView.value = "main";
    expandedFilter.value = null;
    openIndex.value = new Set();
    searchQuery.value = "";
  };

  const setIsOpen = (val: boolean): void => {
    isOpen.value = val;
  };

  const setSearchQuery = (val: string): void => {
    searchQuery.value = val;
  };

  const setActiveFilter = (val: string | null): void => {
    activeFilter.value = val;
  };

  const setActiveSubFilter = (val: string | null): void => {
    activeSubFilter.value = val;
  };

  const setCurrentView = (val: ViewType): void => {
    currentView.value = val;
  };

  const setExpandedFilter = (val: string | null): void => {
    expandedFilter.value = val;
  };

  const setSelectedBudget = (val: BudgetOption): void => {
    selectedBudget.value = val;
  };

  const setSelectedApproval = (val: ApprovalType): void => {
    selectedApproval.value = val;
  };

  // Optional: computed for filters summary
  const hasActiveFilters = computed<boolean>(
    () =>
      !!(
        activeFilter.value ||
        activeSubFilter.value ||
        selectedBudget.value ||
        selectedApproval.value
      )
  );

  // ─────────────────────────────
  // ✅ Return Store
  // ─────────────────────────────
  return {
    // state
    isOpen,
    activeFilter,
    activeSubFilter,
    selectedBudget,
    selectedApproval,
    cardsToShow,
    searchQuery,
    currentView,
    openIndex,
    expandedFilter,

    // getters
    hasActiveFilters,

    // actions
    handleClearAll,
    toggleCard,
    setIsOpen,
    setSearchQuery,
    setActiveFilter,
    setActiveSubFilter,
    setCurrentView,
    setExpandedFilter,
    setSelectedBudget,
    setSelectedApproval,
  };
});
