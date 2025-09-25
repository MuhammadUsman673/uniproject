import { CollapsibleCard } from "./collapsebleCard";

// === BudgetCard Component ===
type BudgetCardProps = {
  selectedBudget: string | null;
  setSelectedBudget: (budget: string | null) => void;
};

export const BudgetCard = ({
  selectedBudget,
  setSelectedBudget,
}: BudgetCardProps) => {
  const budgets = [
    "Upto 1 Lakh",
    "1 Lakh - 2 Lakhs",
    "2 Lakhs - 3 Lakhs",
    "3 Lakhs+",
  ];

  const handleBudgetClick = (budget: string) => {
    setSelectedBudget(budget === selectedBudget ? null : budget);
  };

  return (
    <CollapsibleCard title="Budget">
      {budgets.map((budget) => (
        <div
          key={budget}
          className="flex items-center p-1 cursor-pointer hover:bg-gray-100"
          onClick={() => handleBudgetClick(budget)}
        >
          <span
            className={`w-3 h-3 rounded-full mr-2 border border-gray-400 flex items-center justify-center ${
              selectedBudget === budget ? "bg-[#EC1E24]" : ""
            }`}
          >
            {selectedBudget === budget && (
              <span className="w-1 h-1 bg-white rounded-full"></span>
            )}
          </span>
          <span className="text-gray-700">{budget}</span>
        </div>
      ))}
    </CollapsibleCard>
  );
};