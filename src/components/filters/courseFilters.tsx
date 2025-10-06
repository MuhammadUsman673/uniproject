import { Search, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { courseData } from "@/store/courseData";
import clsx from "clsx";
import { useFilters } from "@/contexts/filterContext";
// import { motion } from "framer-motion";

export const Filters = () => {
  const {
    activeFilter,
    setActiveFilter,
    setActiveSubFilter,
    activeSubFilter,
    searchQuery,
    setSearchQuery,
    currentView,
    setCurrentView,
    expandedFilter,
    setExpandedFilter,
  } = useFilters();

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedParentFilter, setSelectedParentFilter] = useState<
    string | null
  >(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      setExpandedFilter(filterName);
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

  const MainView = () => {
    // search filters by name and subitems
    const filtered = filters.filter((f) => {
      const query = searchQuery.toLowerCase();
      if (f.name.toLowerCase().includes(query)) return true;
      const subItems =
        courseData[f.name as keyof typeof courseData]?.subItems || [];
      return subItems.some((s) => s.toLowerCase().includes(query));
    });

    return (
      <div className="space-y-1 h-fit">
        {filtered.map((filter, index) => {
          const filterKey = filter.name as keyof typeof courseData;
          const isExpanded = expandedFilter == filter.name;
          const subItems = courseData[filterKey]?.subItems || [];

          return (
            <div key={index} className="relative px-2">
              <div
                className={clsx(
                  "flex items-center gap-2 px-4 py-1 rounded-full cursor-pointer transition-all duration-300",
                  activeFilter === filter.name
                    ? "bg-[#EC1E24] text-white scale-[1.02]"
                    : "text-[#282529] hover:scale-[1.02]"
                )}
                onClick={() => handleFilterClick(filter.name)}
              >
                <span className="text-[1rem] ">{filter.icon}</span>
                <span className="text-[0.875rem] flex-1">{filter.name}</span>
              </div>

              {filter.hasSubItems && (
                <div
                  className={clsx(
                    "overflow-hidden relative  transition-all duration-500 ease-out",
                    isExpanded
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className=" absolute h-[calc(100%-37px)] left-6 w-0.5 bg-[#CECECE] mt-4.5 z-10" />
                  <div className="rounded-xl p-2 space-y-1">
                    {subItems.map((subItem) => {
                      // const hasSpecializations =
                      //   courseData[filterKey]?.specializations?.[subItem];

                      return (
                        <div
                          key={subItem}
                          className={clsx(
                            "flex items-center gap-3 pr-6  pl-[15px]  py-1 cursor-pointer",
                            activeSubFilter === subItem
                              ? " text-red-600 "
                              : "text-neutral-700 "
                          )}
                          onClick={() =>
                            handleSubItemClick(subItem, filter.name)
                          }
                        >
                          <div
                            className={clsx(
                              "w-1 h-4 z-20  flex items-center justify-center rounded-4xl",
                              activeSubFilter === subItem
                                ? "bg-[#EC1E24]"
                                : "border-[#EC1E24]"
                            )}
                          />
                          <span className="w-1"></span>
                          <div
                            className={clsx(
                              "w-2 h-2 rounded-full border-[2px] flex items-center justify-center",
                              activeSubFilter === subItem
                                ? "border-[#EC1E24] "
                                : "border-[#aaaaaa] "
                            )}
                          />

                          <span className="flex-1 text-[0.875rem] text-[#282529]">
                            {subItem}
                          </span>
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
  };

  const DetailsView = () => {
    if (!selectedItem || !selectedParentFilter) return null;

    const filterKey = selectedParentFilter as keyof typeof courseData;
    const specializations =
      courseData[filterKey]?.specializations?.[selectedItem] || [];

    return (
      <div
        className={clsx(
          "space-y-2 transition-all duration-300",
          isTransitioning
            ? "opacity-0 -translate-x-4"
            : "opacity-100 translate-x-0"
        )}
      >
        <div className="flex flex-col gap-3  px-7">
          <div className="flex items-center gap-1  cursor-pointer text-[0.875rem]">
            <div
              className={clsx(
                "w-2 h-2 rounded-full border-[2px] mr-2 flex items-center justify-center",
                "border-[#EC1E24] "
              )}
            />
            <span className="text-[#8F8E90]">{selectedItem}</span>
          </div>
          <hr />
        </div>

        {specializations.map((specialization: string, index: number) => (
          <div key={index} className="relative px-7">
            <div
              className="flex items-center gap-3  cursor-pointer text-[0.875rem]"
              onClick={() => handleSpecializationClick(specialization)}
            >
              <div
                className={clsx(
                  "w-2 h-2 rounded-full border-[2px] flex items-center justify-center",
                  activeSubFilter === specialization
                    ? "border-[#EC1E24] "
                    : "border-[#aaaaaa] "
                )}
              />

              <span className="text-[#5e5e5f]">{specialization}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="shadow-md transition-all duration-500">
      <div className="bg-gradient-to-b from-white to-[#EFEFEF] shadow-md shadow-neutral-200 rounded-md pt-4 w-full">
        <div className="flex gap-1 px-2 justify-center items-center text-neutral-600 text-[0.875rem] mb-4">
          {currentView === "details" && (
            <button
              onClick={handleBack}
              className=" hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
          )}
          {"Courses & Specializations"}
        </div>

        <div className="relative mb-6 px-4 lg:px-3">
          <input
            type="text"
            placeholder="Search here...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-1 text-xs border border-neutral-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#EC1E24]] focus:border-transparent transition-all duration-300"
          />
          <Search
            size={14}
            className="absolute right-8 top-1.5 text-neutral-300 hover:text-[#EC1E24]"
          />
        </div>

        <div className="pb-3 relative overflow-hidden ">
          {currentView === "main" ? <MainView /> : <DetailsView />}
        </div>
      </div>
    </div>
  );
};
