import {  ChevronDown } from "lucide-react";
import { useState } from "react";

// === CollapsibleCard Wrapper ===
type CollapsibleCardProps = {
  title: string;
  children: React.ReactNode;
};

export const CollapsibleCard = ({ title, children }: CollapsibleCardProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className=" mt-4 p-4 px-5 bg-gradient-to-b from-white to-[#EFEFEF]  shadow-md shadow-neutral-200   rounded-md">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-[0.875rem] text-[#282529]/80  ">{title}</h2>
        <span
          className={`text-[#282529] transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown/>
        </span>
      </div>

      {/* Content with subtle animation */}
      <div
        className={` transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 pt-3" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
