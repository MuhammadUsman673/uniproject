"use client";
import { useEffect, useState } from "react";
import {
  Home,
  Phone,
  MessageCircle,
  Building2,
  UserCheck,
} from "lucide-react";

export default function BottomNavigationBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 w-screen bg-white z-50 lg:hidden transition-transform duration-300 ${
        hidden ? "translate-y-[130%]" : "translate-y-0"
      }`}
    >
      {/* Compare Now Button */}
      <div className="absolute -top-4 left-1/2 translate-x-[45%]">
        <span className="bg-red-600 hover:bg-red-700 text-white px-2 py-0.5 rounded-full text-[8px] font-medium shadow-md transition-colors duration-200">
          ⚖ Compare Now
        </span>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-white border-t border-neutral-200 shadow-md">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Home */}
          <div className="flex flex-col items-center flex-1 transition-transform hover:scale-105">
            <Home size={20} className="text-neutral-600" />
            <span className="text-[10px] text-neutral-600 font-medium">Home</span>
          </div>

          {/* Call */}
          <div className="flex flex-col items-center flex-1 transition-transform hover:scale-105">
            <Phone size={20} className="text-red-500" />
            <span className="text-[10px] text-red-500 font-medium">Call</span>
          </div>

          {/* Chat */}
          <div className="flex flex-col items-center flex-1 transition-transform hover:scale-105">
            <MessageCircle size={20} className="text-neutral-600" />
            <span className="text-[10px] text-neutral-600 font-medium">Chat</span>
          </div>

          {/* Universities */}
          <div className="flex flex-col items-center flex-1 transition-transform hover:scale-105">
            <Building2 size={20} className="text-neutral-600" />
            <span className="text-[10px] text-neutral-600 font-medium">Universities</span>
          </div>

          {/* Guidance */}
          <div className="flex flex-col items-center flex-1 transition-transform hover:scale-105">
            <UserCheck size={20} className="text-neutral-600" />
            <span className="text-[10px] text-neutral-600 font-medium">Guidance</span>
          </div>
        </div>
      </div>
    </div>
  );
}
