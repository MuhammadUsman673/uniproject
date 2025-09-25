import React, { useState } from 'react';

// CSClickPickCard Component
const CSClickPickCard = () => {
  return (
    <div className="w-64 mt-4 p-4 bg-white shadow-md border border-gray-200 rounded mb-4">
      <h2 className="text-lg font-semibold text-red-500 text-center">CS ClickPick</h2>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Identify verified online universities and compare your favourite universities with a single click.
      </p>
      <div className="flex justify-center mt-4">
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.5 19h10m-10-8a3 3 0 110-6 3 3 0 010 6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5-5 5m6-10v10m-10 0v-10"
          />
        </svg>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Start Now!
        </button>
      </div>
    </div>
  );
};

// ApprovalCard Component
const ApprovalCard = () => {
  const [selectedApproval, setSelectedApproval] = useState('NAAC');

  const approvals = ['UGC', 'NAAC', 'AICTE', 'NIRF', 'WES', 'DEB'];

  const handleApprovalClick = (approval) => {
    setSelectedApproval(approval === selectedApproval ? null : approval);
  };

  return (
    <div className="w-64 mt-4 p-4 bg-white shadow-md border border-gray-200 rounded mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Approvals</h2>
        <span className="text-gray-500">▼</span>
      </div>
      {approvals.map((approval) => (
        <div
          key={approval}
          className="flex items-center p-1 cursor-pointer hover:bg-gray-100"
          onClick={() => handleApprovalClick(approval)}
        >
          <span
            className={`w-3 h-3 rounded-full mr-2 border border-gray-400 flex items-center justify-center ${
              selectedApproval === approval ? 'bg-red-500' : ''
            }`}
          >
            {selectedApproval === approval && <span className="w-1 h-1 bg-white rounded-full"></span>}
          </span>
          <span className="text-gray-700">{approval}</span>
        </div>
      ))}
    </div>
  );
};

// BudgetCard Component
const BudgetCard = () => {
  const [selectedBudget, setSelectedBudget] = useState('1 Lakh - 2 Lakhs');

  const budgets = ['Upto 1 Lakh', '1 Lakh - 2 Lakhs', '2 Lakhs - 3 Lakhs', '3 Lakhs+'];

  const handleBudgetClick = (budget) => {
    setSelectedBudget(budget === selectedBudget ? null : budget);
  };

  return (
    <div className="w-64 mt-4 p-4 bg-white shadow-md border border-gray-200 rounded">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Budget</h2>
        <span className="text-gray-500">▼</span>
      </div>
      {budgets.map((budget) => (
        <div
          key={budget}
          className="flex items-center p-1 cursor-pointer hover:bg-gray-100"
          onClick={() => handleBudgetClick(budget)}
        >
          <span
            className={`w-3 h-3 rounded-full mr-2 border border-gray-400 flex items-center justify-center ${
              selectedBudget === budget ? 'bg-red-500' : ''
            }`}
          >
            {selectedBudget === budget && <span className="w-1 h-1 bg-white rounded-full"></span>}
          </span>
          <span className="text-gray-700">{budget}</span>
        </div>
      ))}
    </div>
  );
};

// UniversityCard Component
const UniversityCard = ({
  universityName,
  rating,
  reviews,
  approvals,
  features,
  imageUrl,
  tag,
  admissionClosing,
  logoUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative w-full border border-gray-200 flex flex-col">
      {/* University Image */}
      <div className="relative h-32 overflow-hidden">
        <img src={imageUrl} alt={universityName} className="w-full h-full object-cover" />
        {/* Admission Closing Tag */}
        {admissionClosing && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full z-10">
            ADMISSION CLOSING ON {admissionClosing}
          </div>
        )}
        {/* University Logo overlay */}
        {logoUrl && (
          <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-full text-xs flex items-center shadow-md">
            <img src={logoUrl} alt="logo" className="w-4 h-4 mr-1" />
            {universityName.split(' ')[0]}
          </div>
        )}
        {/* Trending/Top Rated Tag */}
        {tag && (
          <div className="absolute bottom-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
            {tag}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        {/* Rating and Reviews */}
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="text-yellow-500 mr-1">⭐</span>
          {rating} ({reviews} Reviews)
        </div>

        {/* Approvals */}
        <p className="text-xs text-gray-500 mb-3">{approvals}</p>

        {/* Features */}
        <div className="mb-4 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700 mb-1">
              <span className="text-green-500 mr-2">●</span>
              {feature}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <button className="flex items-center justify-center w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 mb-2">
            <span className="mr-2">⬇️</span> Download Prospectus
          </button>
          <label className="flex items-center w-full px-4 py-2 mb-4 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded" />
            <span className="ml-2 text-gray-700">Add to compare</span>
          </label>
          <button className="bg-red-500 text-white w-full px-4 py-2 rounded-md hover:bg-red-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const Main = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeSubFilter, setActiveSubFilter] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(9); // State to manage how many cards are visible

  const ugCourses = ['BBA', 'B.Com', 'BCA', 'BAJMC', 'BBA In Business...', 'BBA - ACCA', 'Distance BCom', 'Online BA'];

  const filters = [
    { name: 'PG Courses', icon: '🎓' },
    { name: 'UG Courses', icon: '🎓' },
    { name: 'Executive Programs', icon: '💼' },
    { name: 'Certification', icon: '📜' },
    { name: 'Doctorate/Ph.D', icon: '👨‍🎓' },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter === activeFilter ? null : filter);
    if (filter !== 'UG Courses') setActiveSubFilter(null);
  };

  const handleSubFilterClick = (subFilter) => {
    setActiveSubFilter(subFilter === activeSubFilter ? null : subFilter);
  };

  const handleClearAll = () => {
    setActiveFilter(null);
    setActiveSubFilter(null);
  };

  // Dummy Data for University Cards
  const allUniversityCardsData = [
    {
      universityName: 'Manipal Online University',
      rating: '4.6/5',
      reviews: 178,
      approvals: 'AICTE | NAAC | NBA | QS | UGC',
      features: ['No-Cost EMI Available', 'Flexible Payment Options'],
      imageUrl:
       'data:image/jpeg;base64,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',
      logoUrl: 'https://via.placeholder.com/32',
      tag: 'Trending',
      admissionClosing: '29 JULY',
    },
    {
      universityName: 'Jain Online University',
      rating: '4.5/5',
      reviews: 200,
      approvals: 'UGC | DEB',
      features: ['Flexible Payment Options'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68dP6rXAbDizG4A2ZvNAPyn5c_5Gg9h3Uiw&s',
      logoUrl: 'https://via.placeholder.com/32',
      tag: 'Top Rated by Students',
      admissionClosing: '29 JULY',
    },
    {
      universityName: 'Amity Online University',
      rating: '4.7/5',
      reviews: 150,
      approvals: 'AICTE | NIRF',
      features: ['No-Cost EMI Available'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSet-dj5mDyqvWIHbU0Mqj2ll-9mvzaBxKIqQ&s',
      logoUrl: 'https://via.placeholder.com/32',
      admissionClosing: '29 JULY',
    },
    {
      universityName: 'Lovely Professional University',
      rating: '4.4/5',
      reviews: 180,
      approvals: 'UGC | WES',
      features: ['Scholarship Available'],
      imageUrl: 'data:image/jpeg;base64,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',
      logoUrl: 'https://via.placeholder.com/32',
      tag: 'Popular Choice',
      admissionClosing: '29 JULY',
    },
    {
      universityName: 'Symbiosis Online',
      rating: '4.8/5',
      reviews: 220,
      approvals: 'NAAC | DEB',
      features: ['Guaranteed Placement Assistance'],
      imageUrl: 'https://online.siu.edu.in/images/sibm.jpg',
      logoUrl: 'https://via.placeholder.com/32',
      admissionClosing: '29 JULY',
    },
    {
      universityName: 'IGNOU Online',
      rating: '4.3/5',
      reviews: 300,
      approvals: 'UGC | AICTE',
      features: ['Government Approved'],
      imageUrl: 'https://online.ignou.ac.in/images/ignou-logo.png',
      logoUrl: 'https://via.placeholder.com/32',
      admissionClosing: '29 JULY',
    },
    {
      universityName: 'Bharati Vidyapeeth',
      rating: '4.2/5',
      reviews: 160,
      approvals: 'NIRF | NAAC',
      features: ['Modern Curriculum'],
      imageUrl: 'https://online.bharatividyapeeth.edu/images/bv_logo.jpg',
      logoUrl: 'https://via.placeholder.com/32',
      tag: 'New Admission',
      admissionClosing: '29 JULY',
    },
    {
      universityName: 'Sikkim Manipal University',
      rating: '4.0/5',
      reviews: 190,
      approvals: 'DEB | UGC',
      features: ['Weekend Classes'],
      imageUrl: 'https://smude.edu.in/images/smude_logo.jpg',
      logoUrl: 'https://via.placeholder.com/32',
      admissionClosing: '29 JULY',
    },
    {
      universityName: 'Chandigarh University',
      rating: '4.9/5',
      reviews: 250,
      approvals: 'AICTE | QS',
      features: ['Industry Ready Courses'],
      imageUrl: 'https://www.cuchd.in/online/images/cu-logo.jpg',
      logoUrl: 'https://via.placeholder.com/32',
      tag: 'Highly Rated',
      admissionClosing: '29 JULY',
    },
    // Extra dummy cards for "View More"
    {
      universityName: 'Example University 10',
      rating: '4.1/5',
      reviews: 120,
      approvals: 'UGC',
      features: ['Flexible Schedule'],
      imageUrl: 'https://via.placeholder.com/400x200/C0C0C0/000000?text=University+10',
      admissionClosing: '29 JULY',
    },
    {
      universityName: 'Example University 11',
      rating: '4.2/5',
      reviews: 130,
      approvals: 'NAAC',
      features: ['Online Library'],
      imageUrl: 'https://via.placeholder.com/400x200/D3D3D3/000000?text=University+11',
      admissionClosing: '29 JULY',
    },
    {
      universityName: 'Example University 12',
      rating: '4.3/5',
      reviews: 140,
      approvals: 'AICTE',
      features: ['Dedicated Mentors'],
      imageUrl: 'https://via.placeholder.com/400x200/E0E0E0/000000?text=University+12',
      admissionClosing: '29 JULY',
    },
  ];

  const handleViewMore = () => {
    setCardsToShow((prev) => prev + 9);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen p-4 gap-4">
      {/* Left Sidebar */}
      <div className="w-64 flex-shrink-0">
        <div className="p-4 bg-white shadow-md border border-gray-200 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <a href="#" className="text-red-500 text-sm flex items-center" onClick={handleClearAll}>
              <span className="mr-1">🗑️</span>
              Clear all
            </a>
          </div>
          <div className="text-sm text-gray-500 mb-2 text-center">Courses & Specializations</div>
          <div className="mb-2 relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-2 pl-3 pr-10 border border-gray-300 rounded"
            />
            <span className="absolute right-3 top-2 text-gray-400">🔍</span>
          </div>
          <div>
            {filters.map((filter) => (
              <div key={filter.name}>
                <div
                  className={`flex items-center p-2 mb-2 rounded cursor-pointer ${
                    activeFilter === filter.name ? 'bg-red-500 text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleFilterClick(filter.name)}
                >
                  <span className="mr-2">{filter.icon}</span>
                  <span>{filter.name}</span>
                </div>
                {filter.name === 'UG Courses' && activeFilter === 'UG Courses' && (
                  <div className="pl-6 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <div className="scroll-content">
                      {ugCourses.map((subFilter) => (
                        <div
                          key={subFilter}
                          className="flex items-center p-2 mb-2 rounded cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSubFilterClick(subFilter)}
                        >
                          <span
                            className={`w-3 h-3 rounded-full mr-2 ${
                              activeSubFilter === subFilter ? 'bg-red-500' : 'bg-gray-300'
                            }`}
                          ></span>
                          <span className="mr-2">🎓</span>
                          <span className="text-gray-700">{subFilter}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <style jsx>{`
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: #ef4444 #f1f1f1;
              transform: scaleX(-1);
            }
            .custom-scrollbar .scroll-content {
              transform: scaleX(-1);
            }
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #ef4444;
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #dc2626;
            }
          `}</style>
        </div>
        <BudgetCard />
        <ApprovalCard />
        <CSClickPickCard />
      </div>

      {/* Right Side - University Cards */}
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allUniversityCardsData.slice(0, cardsToShow).map((card, index) => (
            <React.Fragment key={index}>
              <UniversityCard {...card} />
              {(index + 1) % 3 === 0 &&
                index !== allUniversityCardsData.slice(0, cardsToShow).length - 1 && (
                  <div className="col-span-full border-b border-gray-300 my-4"></div>
                )}
            </React.Fragment>
          ))}
        </div>

        {/* View More Button */}
        {cardsToShow < allUniversityCardsData.length && (
          <div className="flex justify-center mt-8 mb-8">
            <button
              onClick={handleViewMore}
              className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition duration-300 ease-in-out font-semibold text-lg"
            >
              View More &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;