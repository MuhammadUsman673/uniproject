import { useResponsive } from "@/hooks/use-responsive";
import React, { createContext, useContext, useEffect, useState } from "react";

type FilterContextType = {
  isOpen: boolean;
  setIsOpen: (valuse: boolean) => void;

  activeFilter: string | null;
  setActiveFilter: (value: string | null) => void;

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

  handleClearAll: () => void;
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

  const handleClearAll = () => {
    setActiveFilter(null);
    setActiveSubFilter(null);
    setSelectedBudget(null);
    setSelectedApproval(null);
  };

  useEffect(() => {
    console.log(activeFilter);
    console.log(activeSubFilter)
  }, [activeFilter,activeSubFilter]);

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
