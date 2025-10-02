import React, { useEffect, useState } from "react";
import { UniversityCard } from "../cards/universityCard";
import { Button } from "../ui/button";
import { allUniversityCardsData } from "@/store/uniCardData";
import { Filters } from "../filters/courseFilters";
import { BudgetCard } from "../filters/BudgetCard";
import { ApprovalCard } from "../filters/ApproveCard";
import { CSClickPickCard } from "../cards/clikcPickCard";
import { useResponsive } from "@/hooks/use-responsive";
import clsx from "clsx";
import { useFilters } from "@/contexts/filterContext";
import { BrushCleaningIcon, Search } from "lucide-react";

const Main = () => {
  const { isMobile, isTablet } = useResponsive();
  const [rowCount, setRowCount] = useState(3);

  const {
    activeFilter,
    activeSubFilter,
    selectedBudget,
    selectedApproval,
    cardsToShow,
    setCardsToShow,
    isOpen,
    setIsOpen,
    handleClearAll,
    searchQuery,
    setSearchQuery,
  } = useFilters();

  const handleViewMore = () => setCardsToShow((prev) => prev + 9);

  // Fixed Main.tsx - University Cards filtering logic
  const filteredCards = allUniversityCardsData.filter((card) => {
    // Apply category filter first
    if (activeFilter && card.category !== activeFilter) return false;

    // Apply sub-filter
    if (activeSubFilter && !card.courses?.includes(activeSubFilter))
      return false;

    // Apply budget filter
    if (selectedBudget) {
      const budget = card.budget || 0;
      switch (selectedBudget) {
        case "Upto 1 Lakh":
          if (budget > 100000) return false;
          break;
        case "1 Lakh - 2 Lakhs":
          if (budget <= 100000 || budget > 200000) return false;
          break;
        case "2 Lakhs - 3 Lakhs":
          if (budget <= 200000 || budget > 300000) return false;
          break;
        case "3 Lakhs+":
          if (budget <= 300000) return false;
          break;
      }
    }

    // Apply approval filter
    if (selectedApproval && !card.approvals?.includes(selectedApproval))
      return false;

    // FIXED: Search query implementation
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();

      // Search in university title/name
      const titleMatch = card.universityName?.toLowerCase().includes(query);

      // Search in category
      const categoryMatch = card.category?.toLowerCase().includes(query);

      // Search in courses array
      const coursesMatch = card.features?.some((course: string) =>
        course.toLowerCase().includes(query)
      );

      // Search in any other relevant card properties (add as needed)
      const TagMatch = card.tag?.toLowerCase().includes(query);
      const ApprovalMatch = card.approvals?.toLowerCase().includes(query);

      // Return true if ANY field matches
      if (
        !titleMatch &&
        !categoryMatch &&
        !coursesMatch &&
        !ApprovalMatch &&
        !TagMatch
      ) {
        return false;
      }
    }

    return true;
  });

  // Row count responsiveness
  useEffect(() => {
    if (isMobile) setRowCount(1);
    else if (isTablet) setRowCount(2);
    else setRowCount(3);
  }, [isMobile, isTablet]);

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row p-4 gap-b-10 lg:mt-10">
      {/* Sidebar */}
      <div className={"w-full lg:w-64 lg:block"}>
        <div className="flex justify-between items-center mb-4 p-2">
          <div
            className={clsx(
              "flex justify-between items-center px-6",
              (isTablet || isMobile) && "hidden"
            )}
          >
            <h3 className="text-xl font-semibold text-neutral-800">Filters</h3>
          </div>

          {/* Toggle button */}
          <div>
            <button
              className={clsx(
                "lg:hidden text-neutral-600 text-sm flex items-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 px-4 py-2 rounded-lg border",
                isOpen ? "bg-[#EC1E24] text-white" : "bg-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <BrushCleaningIcon size={15} />
              <span>Filters</span>
            </button>
          </div>

          {/* Clear all */}
          <button
            className={clsx(
              "text-neutral-600 text-sm flex items-center gap-2 hover:text-[#EC1E24] transition-all duration-300 transform hover:scale-105 active:scale-95 px-4 py-2 rounded-lg bg-white border",
              !isOpen && (isTablet || isMobile) && "hidden"
            )}
            onClick={() => {
              handleClearAll();
              setSearchQuery("");
            }}
          >
            <BrushCleaningIcon size={15} />
            <span>Clear all</span>
          </button>

          {/* Search bar */}
          <div
            className={clsx(
              "relative px-4 lg:px-3 flex-1 ",
              (isTablet || isMobile) && !isOpen ? "block" : "hidden"
            )}
          >
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search here...."
              className="w-full px-4 py-1.5 text-sm border-2 border-neutral-400 rounded-full 
                         focus:outline-none focus:ring-2 focus:ring-[#EC1E24]] 
                         focus:border-transparent transition-all duration-300 
                         focus:scale-[1.02] focus:shadow-lg"
            />
            <Search
              size={18}
              className="absolute right-8 top-2 text-neutral-300 transition-all duration-300 hover:text-[#EC1E24] hover:scale-110"
            />
          </div>
        </div>

        {/* Filters */}
        <div className={clsx((isMobile || isTablet) && !isOpen && "hidden")}>
          <Filters />
          <BudgetCard />
          <ApprovalCard />
          <CSClickPickCard />
        </div>
      </div>

      {/* University Cards */}
      <div className="mx-auto lg:mt-0 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 gap-8 md:gap-6 lg:gap-6">
          {filteredCards.slice(0, cardsToShow).map((card, index) => (
            <React.Fragment key={index}>
              <UniversityCard {...card} index={index} />
              {(index + 1) % rowCount === 0 &&
                index !== filteredCards.slice(0, cardsToShow).length - 1 && (
                  <div className="col-span-full border-b border-gray-300 my-4"></div>
                )}
            </React.Fragment>
          ))}
        </div>

        {/* View More */}
        {cardsToShow < filteredCards.length && (
          <div className="flex justify-center mt-12 mb-8">
            <Button
              size="lg"
              onClick={handleViewMore}
              className="bg-[#EC1E24] text-white h-[29px] w-[130px] text-sm rounded-full hover:bg-[#EC1E24] transition font-semibold"
            >
              View More &gt;
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
