import { useState } from "react";

// === CollapsibleCard Wrapper ===
type CollapsibleCardProps = {
  title: string;
  children: React.ReactNode;
};

export const CollapsibleCard = ({ title, children }: CollapsibleCardProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-64 mt-4 p-4 bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-100  shadow-md border border-gray-200 rounded">
      {/* Header */}
      <div
        className="flex justify-between items-center mb-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span
          className={`text-gray-500 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {/* Content with subtle animation */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
