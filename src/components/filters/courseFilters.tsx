import { Search, ChevronLeft, BrushCleaningIcon } from "lucide-react";
import {
  useState,
  type JSXElementConstructor,
  type Key,
  type ReactElement,
  type ReactNode,
  type ReactPortal,
} from "react";
import { courseData } from "@/store/courseData";
// === Filters Component ===
type FiltersProps = {
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
  activeSubFilter: string | null;
  setActiveSubFilter: (subFilter: string | null) => void;
  handleClearAll: () => void;
};

export const Filters = ({
  activeFilter,
  setActiveFilter,
  activeSubFilter,
  setActiveSubFilter,
  handleClearAll,
}: FiltersProps) => {
  const [currentView, setCurrentView] = useState<"main" | "details">("main");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedParentFilter, setSelectedParentFilter] = useState<
    string | null
  >(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState<Set<string>>(
    new Set()
  );

  const filters = Object.keys(courseData).map((name) => ({
    name,
    icon: courseData[name as keyof typeof courseData].icon,
    hasSubItems:
      courseData[name as keyof typeof courseData].subItems.length > 0,
  }));

  const handleViewTransition = (newView: "main" | "details") => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(newView);
      setIsTransitioning(false);
    }, 150);
  };

  const handleFilterClick = (filterName: string) => {
    const hasSubItems =
      courseData[filterName as keyof typeof courseData]?.subItems.length > 0;

    if (hasSubItems) {
      setActiveFilter(filterName === activeFilter ? null : filterName);

      const newExpanded = new Set(expandedFilters);
      if (newExpanded.has(filterName)) {
        newExpanded.delete(filterName);
      } else {
        newExpanded.add(filterName);
      }
      setExpandedFilters(newExpanded);
    } else {
      setActiveFilter(filterName === activeFilter ? null : filterName);
    }
  };

  const handleSubItemClick = (subItem: string, parentFilter: string) => {
    const hasSpecializations =
      courseData[parentFilter as keyof typeof courseData]?.specializations?.[
        subItem
      ];

    if (hasSpecializations) {
      setSelectedItem(subItem);
      setSelectedParentFilter(parentFilter);
      handleViewTransition("details");
    } else {
      setActiveSubFilter(subItem === activeSubFilter ? null : subItem);
    }
  };

  const handleSpecializationClick = (specialization: string) => {
    setActiveSubFilter(
      specialization === activeSubFilter ? null : specialization
    );
  };

  const handleBack = () => {
    handleViewTransition("main");
    setSelectedItem(null);
    setSelectedParentFilter(null);
  };

  const handleClearAllFilters = () => {
    handleClearAll();
    setExpandedFilters(new Set());
    if (currentView !== "main") {
      handleViewTransition("main");
      setSelectedItem(null);
      setSelectedParentFilter(null);
    }
  };

  // Main filters view with dynamic dropdowns
  const MainView = () => (
    <div className={`space-y-2 `}>
      {filters.map((filter, index) => {
        const filterKey = filter.name as keyof typeof courseData;
        const isExpanded = expandedFilters.has(filter.name);
        const subItems = courseData[filterKey]?.subItems || [];

        return (
          <div key={index} className="relative px-2 ">
            {/* Main Filter */}
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transform transition-all duration-300 ease-out hover:scale-[1.02] ${
                activeFilter === filter.name
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white scale-[1.02]"
                  : "text-[#282529]"
              }`}
              onClick={() => handleFilterClick(filter.name)}
            >
              <span
                className={`text-lg transition-transform duration-300 ${
                  activeFilter === filter.name ? "scale-110" : "hover:scale-110"
                }`}
              >
                {filter.icon}
              </span>
              <span className="text-base transition-all duration-300 flex-1">
                {filter.name}
              </span>
              {filter.hasSubItems && (
                <div
                  className={`transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "hover:translate-y-0.5"
                  }`}
                >
                  {/* <ChevronDown size={16} /> */}
                </div>
              )}
            </div>

            {/* Dynamic Dropdown for any filter with sub-items */}
            {filter.hasSubItems && (
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isExpanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-gray-50 rounded-xl p-2 space-y-1">
                  {subItems.map((subItem, subIndex) => {
                    const hasSpecializations =
                      courseData[filterKey]?.specializations?.[subItem];

                    return (
                      <div
                        key={subItem}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transform transition-all duration-300 ease-out hover:scale-[1.01] ${
                          activeSubFilter === subItem
                            ? "bg-white text-red-600 shadow-sm border-l-4 border-red-500"
                            : "text-gray-700 hover:bg-white hover:shadow-sm"
                        }`}
                        onClick={() => handleSubItemClick(subItem, filter.name)}
                        style={{
                          animationDelay: `${subIndex * 30}ms`,
                          animation: isExpanded
                            ? "slideInFromLeft 0.3s ease-out forwards"
                            : "none",
                        }}
                      >
                        <div
                          className={`w-3 h-3 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            activeSubFilter === subItem
                              ? "border-red-500 bg-red-500"
                              : "border-red-500"
                          }`}
                        >
                          {activeSubFilter === subItem && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          )}
                        </div>
                        <span className="font-medium flex-1">{subItem}</span>
                        {hasSpecializations && (
                          <div className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                            <ChevronLeft size={14} className="rotate-180" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  // Generic details view for any selected item
  const DetailsView = () => {
    if (!selectedItem || !selectedParentFilter) return null;

    const filterKey = selectedParentFilter as keyof typeof courseData;
    const specializations =
      courseData[filterKey]?.specializations?.[selectedItem] || [];

    return (
      <div
        className={`space-y-2 transition-all duration-300 ${
          isTransitioning
            ? "opacity-0 -translate-x-4"
            : "opacity-100 translate-x-0"
        }`}
      >
        {specializations.map(
          (
            specialization:
              | boolean
              | Key
              | ReactElement<unknown, string | JSXElementConstructor<unknown>>
              | Iterable<ReactNode>
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<unknown>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined,
            index: number
          ) => (
            <div
              key={index}
              className="relative"
              style={{
                animationDelay: `${index * 40}ms`,
                animation: isTransitioning
                  ? "none"
                  : "slideInFromRight 0.4s ease-out forwards",
              }}
            >
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transform transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md ${
                  activeSubFilter === specialization
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg scale-[1.02]"
                    : "text-gray-700 hover:bg-gray-50 hover:border-gray-200 border border-transparent"
                }`}
                onClick={() => {
                  if (typeof specialization === "string") {
                    handleSpecializationClick(specialization);
                  }
                }}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform ${
                    activeSubFilter === specialization
                      ? "border-white bg-white scale-110"
                      : "border-red-500 hover:scale-110"
                  }`}
                >
                  {activeSubFilter === specialization && (
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  )}
                </div>
                <span className="font-medium transition-all duration-300">
                  {specialization}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    );
  };

  return (
    <div className=" shadow-md transform transition-all duration-500 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 px-6">
        <div className="flex items-center gap-2">
          {currentView === "details" && (
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 active:scale-95"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
          )}
          <h2
            className={`text-xl font-semibold text-gray-800 transition-all duration-300 ${
              currentView === "details" ? "transform translate-x-2" : ""
            }`}
          >
            Filters
          </h2>
        </div>
        <button
          className="text-neutral-600  text-sm flex items-center gap-2 hover:text-red-500 transition-all duration-300 transform hover:scale-105 active:scale-95 px-2 py-1 rounded-lg bg-white border"
          onClick={handleClearAllFilters}
        >
          <span className="transition-transform duration-300 hover:rotate-12 ">
            <BrushCleaningIcon size={15} />
          </span>
          <span>Clear all</span>
        </button>
      </div>

      <div className="bg-gradient-to-b from-white to-[#EFEFEF]  shadow-md shadow-neutral-200   rounded-md0 py-4">
        {/* Dynamic Subtitle */}
        <div
          className={`text-neutral-600 text-lg mb-4 transition-all duration-300 text-center`}
        >
          {currentView === "main"
            ? "Courses & Specializations"
            : `${selectedItem} Specializations`}
        </div>

        {/* Search Bar */}
        <div className="relative mb-6 px-4 lg:px-3 ">
          <input
            type="text"
            placeholder="Search here...."
            className="w-full px-4 py-1.5 text-sm border-2 border-neutral-400 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
          />
          <Search
            size={18}
            className="absolute right-8 top-2 text-neutral-300 transition-all duration-300 hover:text-red-500 hover:scale-110"
          />
        </div>

        {/* Dynamic Content */}
        <div className="pb-6 relative overflow-hidden">
          <div className={`transition-all duration-300`}>
            {currentView === "main" ? <MainView /> : <DetailsView />}
          </div>
        </div>
      </div>
    </div>
  );
};
