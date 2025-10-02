import { useEffect, useRef } from "react";

export default function HiringBrands() {
  const companies = [
    "ms.png",
    "adani.png",
    "adecco.png",
    "addobe.png",
    "honda.png",
    "google.png",
    "facebook.png",
  ];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      requestAnimationFrame(() => {
        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2.4;
      });
    }
  }, []);
  return (
    <div className="text-center  mb-12 ">
      <p className="text-[#282529] text-[0.75rem]">
        Get hired by the world's exciting companies
      </p>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto items-center lg:justify-center gap-8 md:gap-12 px-2 my-12 "
      >
        {companies.map((company, index) => (
          <img
            key={index}
            className="flex-shrink-0 grayscale"
            src={`/logo/${company}`}
            alt={`Company logo ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
