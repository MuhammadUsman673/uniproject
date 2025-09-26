import { useState } from "react";
import {
  // Menu,
  Search,
  X,
} from "lucide-react";
import { ExploreMenu } from "./navigation-menu";
// import { Button } from "../ui/button";

// Import your filters
import { Filters } from "../filters/courseFilters";
import { ApprovalCard } from "../filters/ApproveCard";
import { BudgetCard } from "../filters/BudgetCard";
import { CSClickPickCard } from "../filters/clikcPickCard";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="bg-white px-2 lg:px-6 py-4 lg:py-5 border  mx-3  rounded-2xl shadow-[0px_0px_8px_#c6c6c686]">
        <div className="mx-auto flex items-center justify-between ">
          {/* <div className="lg:hidden">
            <Button
              size={"icon"}
              variant={"ghost"}
              onClick={() => setIsOpen(true)}
            >
              <Menu />
            </Button>
          </div> */}

          {/* Logo */}
          <div className="relative ">
            <img src="/logo/main.svg" className="h-8" />
          </div>

          {/* Centered Menu */}
          <nav className="flex-1 flex justify-center space-x-8 items-center">
            <div className="relative group hidden lg:block">
              <ExploreMenu />
            </div>
          </nav>

          {/* Hotline & Search */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block bg-gradient-to-r from-[#EC1E24] to-[#c41a1f] text-white px-4 py-1.5 font-semibold border border-gray-200 rounded-sm relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFF5F5] text-black px-4 py-0.5 rounded-full text-[8px] border border-[#EC1E24] ">
                HELPLINE
              </span>
              9785-800-008
            </div>
            <button className="flex items-center justify-center gap-2 hover:text-[#EC1E24] transition bg-[#FFF5F5] border border-[#EC1E24] rounded-full px-4 py-1.5">
              <span>Search</span>
              <Search size={20} className="font-extralight" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Drawer */}
      <div
        className={`fixed  top-0 left-0 h-full w-72 bg-white shadow-2xl border-r border-gray-200 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700">Filters</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={22} className="text-gray-600 hover:text-red-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
          <Filters
            activeFilter={null}
            setActiveFilter={() => {}}
            activeSubFilter={null}
            setActiveSubFilter={() => {}}
            handleClearAll={() => {}}
          />
          <BudgetCard selectedBudget={null} setSelectedBudget={() => {}} />
          <ApprovalCard
            selectedApproval={null}
            setSelectedApproval={() => {}}
          />
          <CSClickPickCard />
        </div>
      </div>

      {/* Overlay */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )} */}
    </>
  );
}

export default Navbar;
