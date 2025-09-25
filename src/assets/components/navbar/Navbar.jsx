import React from "react";

function Navbar() {
  return (
    <header className="bg-white shadow-md py-6 px-7">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative">
          <span className="text-xl font-bold text-red-600">Collegesathi</span>
          <span className="absolute -bottom-2 right-0 text-sm text-red-600">.com</span>
        </div>

        {/* Centered Menu */}
        <nav className="flex-1 flex justify-center space-x-8 items-center">
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600 transition bg-[#FFF5F5] border border-red-600 rounded-full px-3 py-1">
              Explore Programs
              <svg
                className="w-4 h-4 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {/* Dropdown (hidden by default) */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Program 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Program 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Program 3</a>
            </div>
          </div>

          <a href="#" className="hover:text-red-600 transition">Top Universities</a>
          <a href="#" className="hover:text-red-600 transition">ClikPick</a>
          <div className="relative group">
            <a href="#" className="hover:text-red-600 transition flex items-center">
              More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Hotline & Search */}
        <div className="flex items-center space-x-4">
          <div className="bg-red-600 text-white px-3 py-1 font-semibold border border-gray-200 rounded-sm relative">
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFF5F5] text-red-600 px-2 py-1 rounded-full text-xs border-red-600 ">Helpline</span>
            9785-800-008
          </div>
          <button className="flex items-center gap-1 hover:text-red-600 transition bg-[#FFF5F5] border border-red-600 rounded-full px-3 py-1">
            Search
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.85-8.65a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;