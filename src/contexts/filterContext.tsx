import { useResponsive } from "@/hooks/use-responsive";
import React, { createContext, useContext, useState } from "react";

type FilterContextType = {
  isOpen: boolean;
  setIsOpen: (valuse: boolean) => void;

  activeFilter: string | null;
  setActiveFilter: (value: string | null) => void;

  openIndex: Set<number>;
  setOpenIndex: (value: Set<number>) => void;

  activeSubFilter: string | null;
  setActiveSubFilter: (value: string | null) => void;

  selectedBudget: string | null;
  setSelectedBudget: (value: string | null) => void;

  selectedApproval: string | null;
  setSelectedApproval: (value: string | null) => void;

  cardsToShow: number;
  setCardsToShow: React.Dispatch<React.SetStateAction<number>>;

  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

  currentView: "main" | "details";
  setCurrentView: React.Dispatch<React.SetStateAction<"main" | "details">>;

  expandedFilter: string | null;
  setExpandedFilter: React.Dispatch<React.SetStateAction<string | null>>;

  handleClearAll: () => void;
  toggleCard: (index: number) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isMobile, isTablet } = useResponsive();
  const [isOpen, setIsOpen] = useState(isMobile || isTablet ? true : false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeSubFilter, setActiveSubFilter] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedApproval, setSelectedApproval] = useState<string | null>(null);
  const [cardsToShow, setCardsToShow] = useState(9);
  const [currentView, setCurrentView] = useState<"main" | "details">("main");
  const [openIndex, setOpenIndex] = useState<Set<number>>(new Set());
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleClearAll = () => {
    setActiveFilter(null);
    setActiveSubFilter(null);
    setSelectedBudget(null);
    setSelectedApproval(null);
    setCurrentView("main");
    setExpandedFilter(null);
    setOpenIndex(() => new Set());
  };

  return (
    <FilterContext.Provider
      value={{
        activeFilter,
        setActiveFilter,
        activeSubFilter,
        setActiveSubFilter,
        selectedBudget,
        setSelectedBudget,
        selectedApproval,
        setSelectedApproval,
        cardsToShow,
        setCardsToShow,
        handleClearAll,
        isOpen,
        setIsOpen,
        searchQuery,
        setSearchQuery,
        openIndex,
        setOpenIndex,
        toggleCard,
        currentView,
        setCurrentView,
        expandedFilter,
        setExpandedFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
