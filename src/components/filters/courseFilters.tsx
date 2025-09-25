import { Search } from "lucide-react";

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
  const ugCourses = [
    "Financial Management",
    "Banking And Insurance",
    "Digital Marketing",
    "Entrepreneurship",
    "Hospital Management",
  ];

  const filters = [
    { name: "B.Com", icon: "⭕" },
    { name: "UG Courses", icon: "⭕" },
    { name: "Executive Programs", icon: "⭕" },
    { name: "Certification", icon: "⭕" },
    { name: "Doctorate/Ph.D", icon: "⭕" },
  ];

  const handleFilterClick = (filter: string | null) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };

  return (
    <div className="bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-100 shadow-lg border border-gray-100 rounded-2xl p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          className="text-gray-600 text-sm flex items-center gap-1 hover:text-[#EC1E24]"
          onClick={handleClearAll}
        >
          <span>🗑️</span> Clear all
        </button>
      </div>

      {/* Title */}
      <div className="text-gray-600 text-sm mb-3">
        Courses & Specializations
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search here...."
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-red-400"
        />
        <Search size={16} className="absolute right-4 top-2.5 text-gray-400" />
      </div>

      {/* Filters */}
      {filters.map((filter) => (
        <div key={filter.name} className="mb-2">
          {/* Main Filter */}
          <div
            className="flex items-center gap-2 py-0 cursor-pointer text-gray-800 font-medium"
            onClick={() => handleFilterClick(filter.name)}
          >
            <span
              className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                activeFilter === filter.name
                  ? "border-[#EC1E24] bg-[#EC1E24]"
                  : "border-[#EC1E24]"
              }`}
            >
              {activeFilter === filter.name && (
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </span>
            {filter.name}
          </div>

          {/* Subfilters */}
          {activeFilter === filter.name && (
            <div className="pl-6 border-l border-gray-200 space-y-2">
              {ugCourses.map((subFilter) => (
                <div
                  key={subFilter}
                  className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800"
                  onClick={() =>
                    setActiveSubFilter(
                      subFilter === activeSubFilter ? null : subFilter
                    )
                  }
                >
                  <span
                    className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                      activeSubFilter === subFilter
                        ? "border-[#EC1E24] bg-[#EC1E24]"
                        : "border-gray-400"
                    }`}
                  >
                    {activeSubFilter === subFilter && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <span>{subFilter}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};