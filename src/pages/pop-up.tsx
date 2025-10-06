import { useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import clsx from "clsx";

type TabType = {
  active: string;
  previous: string | null;
};

export default function NMIMSPopup() {
  const [open, setOpen] = useState(true);
  const [tabState, setTabState] = useState<TabType>({
    active: "approvals",
    previous: null,
  });

  if (!open) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Open Popup
        </button>
      </div>
    );
  }

  const LEFT_PANEL_DATA = {
    logo: "/logo/uni-1.png",
    title: "NMIMS CDOE",
    subtitle: "Quick Insights",
    bulletPoints: [
      "Lorem ipsum dolor sit",
      "mat outputat blandit nunc ut",
      "blandit nunc ut elit amet he",
    ],
    rankingImage: "/logo/ranking.png",
    tags: [
      { text: "100% Online", highlight: false },
      { text: "15+ Specializations", highlight: false },
      { text: "EMI Available", highlight: false },
      { text: "Flexible Payment Options", highlight: false },
      { text: "Top Choice University", highlight: true },
      { text: "Industry Ready curriculum", highlight: false },
      { text: "Quality Digital Education", highlight: false },
    ],
  };

  const tabs = [
    { id: "approvals", label: "Approvals" },
    { id: "courses", label: "Courses" },
    { id: "campus", label: "Campus" },
    { id: "ratings", label: "Ratings" },
  ];

  return (
    <div className="fixed  inset-0 bg-black/20 backdrop-blur-2xl bg-opacity-50 flex items-center overflow-auto justify-center px-2 py-4 z-50">
      <div className="relative w-full  max-w-[62.625rem] ">
        {/* Navigation Tabs */}
        <div className="absolute -top-18 left-1/2 transform -translate-x-1/2 p-1.5 rounded-md flex z-10 bg-gradient-to-r from-red-800 via-theme to-red-800 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setTabState({ active: tab.id, previous: tabState.active })
              }
              className={`text-xs md:text-base px-2 md:px-6 py-2 font-bold transition-colors rounded-md ${
                tabState.active === tab.id
                  ? "bg-white text-red-700  "
                  : " text-white hover:bg-red-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Container */}
        <div className="relative bg-gradient-to-br from-red-800 via-red-700 to-red-800 rounded-2xl shadow-2xl overflow-hidden md:max-h-[36.563rem] max-w-[62.625rem]">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-20 bg-white rounded-full h-[1.563rem] w-[1.563rem] hover:bg-neutral-100"
          >
            <img src="/icons/normal/cross.svg" className=" text-theme ml-1 " />
          </button>

          {/* Content Grid */}
          <div className="flex gap-8 p-4 pt-12 md:p-10">
            {/* Left Panel */}
            <div className="text-white space-y-3 md:w-72 hidden md:block">
              <button
                onClick={() =>
                  setTabState((prev) => ({
                    active: prev.previous ?? prev.active,
                    previous: null,
                  }))
                }
                disabled={tabState.previous == null}
                className="flex items-center gap-2 text-white hover:underline mb-11 disabled:text-neutral-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-[1rem]">Back</span>
              </button>

              {/* NMIMS Logo */}
              <div className="bg-white rounded-lg p-2 inline-block">
                <img src={LEFT_PANEL_DATA.logo} />
              </div>

              {/* Title */}
              <div className="-space-y-1 text-[2rem] font-bold">
                <h1>{LEFT_PANEL_DATA.title}</h1>
                <h2>{LEFT_PANEL_DATA.subtitle}</h2>
              </div>

              {/* Bullet Points */}
              <div className="flex flex-col justify-center space-y-2 text-[0.875rem]">
                {LEFT_PANEL_DATA.bulletPoints.map((point: string) => (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span className="">{point}</span>
                  </div>
                ))}
              </div>

              {/* Ranking Badge */}
              <div className="w-fit">
                <img src="/logo/ranking.png" />
              </div>

              {/* Tags */}

              <div className="flex flex-wrap w-64 gap-2 text-[0.5rem] text-black [&>*]:px-2 [&>*]:py-0.5 [&>*]:bg-white [&>*]:rounded-full">
                {LEFT_PANEL_DATA.tags.map(
                  (tag: { text: string; highlight: boolean }) => (
                    <span
                      className={clsx(
                        tag.highlight &&
                          `!bg-[#D9F9A5]  !text-[#0B8F4F] font-bold `
                      )}
                    >
                      {tag.text}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right Panel */}
            <div className="bg-gradient-to-b from-red-50 to-red-200 rounded-2xl h-fit md:h-[31.25rem] w-full  md:w-[34.75rem] pt-8 p-0 md:px-8  ">
              {tabState.active === "approvals" && <Approvals />}

              {tabState.active === "courses" && <Courses />}

              {tabState.active === "campus" && <Campus />}

              {tabState.active === "ratings" && <Ratings />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Approvals() {
  const APPROVALS = [
    { title: "NAAC A+ Accreditation", logo: "/logo/apr-1.png" },
    { title: "UGC-Entitled", logo: "/logo/apr-2.png" },
    { title: "Approved by AICTE", logo: "/logo/apr-3.png" },
    { title: "MHRD Category 1 University", logo: "/logo/apr-4.png" },
  ];

  return (
    <div className=" bg-white h-full p-6 flex flex-col items-center rounded-2xl">
      <h2 className="text-xl font-bold text-neutral-800 mb-6 ">
        <span className="text-theme">Approvals</span> of NMIMS CDOE
      </h2>

      <div className="space-y-3">
        {APPROVALS.map((apr) => {
          return (
            <div className="flex items-center rounded-2xl gap-4 h-[4.5rem] max-w-[26.44rem] bg-[#F8F8F8] border border-neutral-200">
              <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 mx-4">
                <img
                  src={apr.logo}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex-1">
                <p className="text-[#282529] text-xs md:text-sm font-medium">
                  {apr.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="mt-5 text-center">
        <button className="bg-gradient-to-r from-red-800 via-theme to-red-800  text-white font-medium px-4 py-1 rounded-lg  text-sm">
          Know More Details
        </button>
      </div>
    </div>
  );
}

function Courses() {
  const courses = [
    { title: "MCA", label: "Innovative", icon: "/icons/mca.svg" },
    { title: "MA", label: "2 Years", icon: "/icons/ma.svg" },
    { title: "M.Tech", label: "Advanced", icon: "/icons/m-tech.svg" },
    {
      title: "LLM",
      label: "High ROI",
      icon: "/icons/llm.svg",
      highlight: true,
    },
  ];

  return (
    <div className=" bg-white h-full p-6 flex flex-col items-center rounded-2xl">
      <h2 className="text-xl font-bold text-neutral-800 mb-6 ">
        <span className="text-theme">Approvals</span> of NMIMS CDOE
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="relative border-2 border-neutral-3 00 rounded-2xl flex flex-col items-center justify-center h-[9.5rem] w-[8.5rem] md:w-[10.5rem]"
          >
            {/* Label */}
            <div
              className={`absolute -top-0 px-4 py-0 text-[0.6rem] rounded-b-lg font-light ${
                course.highlight
                  ? "bg-[#D9F9A5] text-[#0B8F4F]"
                  : "bg-neutral-100 text-neutral-500"
              }`}
            >
              {course.label}
            </div>

            {/* Icon */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={course.icon}
                alt={course.title}
                className="h-[2rem] w-[2rem] text-red-600"
              />

              {/* Title */}
              <h3 className="mt-2 text-base font-semibold text-neutral-800">
                {course.title}
              </h3>
            </div>

            {/* Button */}
            <button className="absolute bottom-2 bg-red-600 hover:bg-red-700 text-white text-sm font-light px-2 py-0 w-32 md:w-40 rounded-full">
              View Program
            </button>
          </div>
        ))}
      </div>

      {/* Bottom button */}
      <div className="mt-5 text-center">
        <button className="bg-gradient-to-r from-red-800 via-theme to-red-800  text-white font-medium px-4 py-1 rounded-lg  text-sm">
          Know More Details
        </button>
      </div>
    </div>
  );
}

function Campus() {
  const APPROVALS = [
    { title: "Mumbai", logo: "/images/cambridge.png" },
    { title: "Shirpur", logo: "/images/cambridge.png" },
    { title: "Indore", logo: "/images/cambridge.png" },
    { title: "Mumbai", logo: "/images/cambridge.png" },
    { title: "Mumbai", logo: "/images/cambridge.png" },
    { title: "Shirpur", logo: "/images/cambridge.png" },
    { title: "Indore", logo: "/images/cambridge.png" },
    { title: "Mumbai", logo: "/images/cambridge.png" },
  ];

  return (
    <div className=" bg-white h-full p-6 flex flex-col items-center rounded-2xl">
      <h2 className="text-xl font-bold text-neutral-800 mb-6 ">
        <span className="text-theme">Compus</span> Locations
      </h2>

      <div className="space-x-2 space-y-1.5  grid grid-cols-2 gap-2">
        {APPROVALS.map((apr) => {
          return (
            <div className="flex items-center rounded-lg  h-[4.2rem] w-[8.6rem] md:w-[10rem]  border-2 border-neutral-400">
              <div className="w-12 h-12 md:w-13 md:h-13 rounded-full flex-shrink-0 mx-2">
                <img
                  src={apr.logo}
                  className="object-cover aspect-square rounded-full"
                />
              </div>

              <div className="flex-1">
                <p className="text-[#282529] text-sm font-medium">
                  {apr.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="mt-5 text-center  ">
        <button className="bg-gradient-to-r from-red-800 via-theme to-red-800  text-white font-semibold px-4 py-1 rounded-lg  text-sm">
          Know More Details
        </button>
      </div>
    </div>
  );
}

function Ratings() {
  return (
    <div className="bg-white rounded-2xl h-full p-6  shadow-sm">
      {/* Heading */}

      <h2 className="text-xl font-bold text-neutral-800 mb-6 text-center ">
        <span className="text-theme">Ratings and Reviews</span> by Students
      </h2>

      {/* Main Score */}
      <div className="flex items-center gap-3  text-center mb-6 bg-red-100 w-fit  px-4 mx-auto rounded-2xl">
        <div className="justify-center gap-2">
          <p className="text-[3.25rem] font-bold text-[#282529]">4.5</p>
        </div>
        <div>
          <div className="flex items-center text-[#FBAD33] space-x-1">
            <Star className="fill-current w-4 h-3.5" />
            <Star className="fill-current w-4 h-3.5" />
            <Star className="fill-current w-4 h-3.5" />
            <Star className="fill-current w-4 h-3.5" />
            <Star className="w-4 h-3.5" fill="white" stroke="white" />
          </div>
          <p className="text-neutral-500 text-xs">Based on 20 Reviews</p>
        </div>
      </div>

      {/* Peripheral Rating */}
      <div className="border border-neutral-300 rounded-lg p-5 lg:px-10 mb-6">
        <h3 className="font-semibold text-[1.063rem] text-neutral-800 mb-4">
          Peripheral Rating{" "}
          <span className="text-sm font-normal">(Out of 5)</span>
        </h3>
        <div className="space-y-2 text-sm">
          {[
            { label: "Average Ratings", score: 3.9 },
            { label: "Digital Infrastructure", score: 4.2 },
            { label: "Curriculum", score: 3.9 },
            { label: "Value For Money", score: 3.9 },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center text-xs md:text-base justify-between text-[#282529]"
            >
              <span>{item.label}</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{item.score}</span>
                <div className="flex text-[#FBAD33] ">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(item.score)
                          ? "fill-current "
                          : "fill-neutral-200 stroke-neutral-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-8   text-center">
        <button className="bg-gradient-to-r from-red-800 via-theme to-red-800  text-white font-medium px-4 py-1 rounded-lg  text-sm">
          Know More Details
        </button>
      </div>
    </div>
  );
}
