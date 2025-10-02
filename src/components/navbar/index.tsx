import { useState } from "react";
import { Search } from "lucide-react";
import { ExploreMenu } from "./navigationMenu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  // mock search results
  const data = [
    "Harvard University",
    "Stanford University",
    "MIT",
    "Oxford University",
    "Cambridge University",
    "UC Berkeley",
  ];

  const filtered = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <header className=" max-w-[1276px] lg:mx-auto  mx-3 bg-white px-2 lg:px-6 py-4 lg:py-5 border  rounded-2xl shadow-[0px_0px_8px_#c6c6c686]">
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="relative">
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

            {/* Search opens modal */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-center gap-2 hover:text-[#EC1E24] transition bg-[#FFF5F5] border border-[#EC1E24] rounded-full px-4 py-1.5"
            >
              <span>Search</span>
              <Search size={20} className="font-extralight" />
            </button>
          </div>
        </div>
      </header>

      {/* Shadcn Search Modal */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Search Universities</DialogTitle>
          </DialogHeader>

          {/* Search Input */}
          <div className="mt-2">
            <Input
              placeholder="Type to search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>

          {/* Search Results */}
          <div className="mt-4 max-h-64 overflow-y-auto">
            {filtered.length > 0 ? (
              <ul className="space-y-2">
                {filtered.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-2 border rounded-md hover:bg-red-50 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">No results found.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Navbar;
