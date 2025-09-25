import React, { useState } from "react";
import { UniversityCard } from "./universityCard";
import { Button } from "../ui/button";
import { allUniversityCardsData, } from "@/store/uniCardData";
import { Filters } from "../filters/courseFilters";
import { BudgetCard } from "../filters/BudgetCard";
import { ApprovalCard } from "../filters/ApproveCard";
import { CSClickPickCard } from "../filters/clikcPickCard";

// === CSClickPickCard Component ===


// === ApprovalCard Component ===


// === Main Component ===
const Main = () => {
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

  const handleViewMore = () => setCardsToShow((prev) => prev + 9);

  const filteredCards = allUniversityCardsData.filter((card) => {
    if (activeFilter && card.category !== activeFilter) return false;
    if (activeSubFilter && !card.courses.includes(activeSubFilter))
      return false;
    if (selectedBudget && card.budget !== selectedBudget) return false;
    if (selectedApproval && !card.approvals.includes(selectedApproval))
      return false;
    return true;
  });

  return (
    <div className="flex  min-h-screen p-4 gap-4">
      {/* Sidebar */}
      <div className="w-64 hidden lg:block flex-shrink-0">
        <Filters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          activeSubFilter={activeSubFilter}
          setActiveSubFilter={setActiveSubFilter}
          handleClearAll={handleClearAll}
        />
        <BudgetCard
          selectedBudget={selectedBudget}
          setSelectedBudget={setSelectedBudget}
        />
        <ApprovalCard
          selectedApproval={selectedApproval}
          setSelectedApproval={setSelectedApproval}
        />
        <CSClickPickCard />
      </div>

      {/* University Cards */}
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-2 lg:gap-2">
          {filteredCards.slice(0, cardsToShow).map((card, index) => (
            <React.Fragment key={index}>
              <UniversityCard {...card} />
              {(index + 1) % 3 === 0 &&
                index !== filteredCards.slice(0, cardsToShow).length - 1 && (
                  <div className="col-span-full border-b border-gray-300 my-4"></div>
                )}
            </React.Fragment>
          ))}
        </div>
        {cardsToShow < filteredCards.length && (
          <div className="flex justify-center mt-15 mb-8">
            <Button
              size="lg"
              onClick={handleViewMore}
              className="bg-[#EC1E24] text-white px-10 rounded-full hover:bg-[#EC1E24] transition duration-300 ease-in-out font-semibold"
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
