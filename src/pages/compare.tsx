import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import MainLayout from "@/layouts/main";
import "@/../public/css/no-scroll.css";
import CompareRatings from "@/components/cards/compare-ratings";
import HiringBrands from "@/components/cards/hiring-brands";
import { Checkbox } from "@/components/ui/checkbox";
import { useCompare } from "@/contexts/compareContext";

export default function ComparePage() {
  const {
    currentStep,
    selectedCourse,
    selectedPath,
    selectedUniversity,
    selectedSpecialization,
  } = useCompare();

  const renderSection = () => {
    switch (currentStep) {
      case "path":
        return <PathSection />;
      case "course":
        return <CourseSection />;
      case "specialization":
        return <SpecializationSection />;
      case "compare":
        return <CompareSection />;
    }
  };

  return (
    <MainLayout>
      <div className="pt-10 pb-6 lg:py-20 ">
        {/* Main Content */}
        <main className="relative  mx-auto ">
          {/* Hero Section */}
          <div className="relative z-[999] text-center mb-4  lg:mb-16">
            <h1 className="text-[2.25rem] lg:text-[4rem] font-bold text-gray-900 mb-4">
              Compare with CS ClikPick
            </h1>
            <p className="text-[#282529] text-[1rem] lg:text-[1.25rem]">
              Get insights, compare and find your perfect Specialization
              <br className="hidden sm:block" />
              within seconds
            </p>
          </div>

          {/* Main Card Section */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
            {/* Left Side - Illustration Card */}
            <div className="hidden lg:block z-30 absolute top-76 left-24">
              {(() => {
                if (currentStep === "path" && selectedPath) {
                  return <img src="/images/cmp1.png" alt="Path" />;
                }
                if (currentStep === "course" && selectedCourse) {
                  return <img src="/images/cmp-2.png" alt="Course" />;
                }
                if (
                  currentStep === "specialization" &&
                  selectedSpecialization
                ) {
                  return <img src="/images/cmp-4.png" alt="Specialization" />;
                }
                if (currentStep === "compare" && selectedUniversity) {
                  return <img src="/images/cmp-3.png" alt="Compare" />;
                }
                return <img src="/images/compare-bg-2.png" alt="Default" />;
              })()}
            </div>

            {/*  */}
            <div className="" />
            {/*  */}

            {/* Right Side - Selection Card */}
            {renderSection()}
          </div>

          {/* Companies Section */}

          <div className="relative z-[9999]">
            <HiringBrands />
          </div>

          {/* Trust Section */}
          <CompareRatings />

          <div className="absolute top-[28rem] left-[30rem] w-0 h-2 rounded-full  shadow-[0px_0px_300px_300px_#FFF5DC] z-10 "></div>
          <div className="absolute  lg:top-[40rem] top-[28rem] left-40 w-0 h-2 rounded-full shadow-[0px_0px_500px_500px_#FCD6D6]/60 lg:shadow-[0px_0px_300px_300px_#FCD6D6]  z-10"></div>
          {/* "right" */}
          <div className="absolute top-[34rem] right-[28rem] w-0 h-2 rounded-full  shadow-[0px_0px_300px_300px_#FCD6D6] z-40 hidden lg:block"></div>
          {/* bottom */}
          <div className="absolute bottom-[24rem] left-0 w-1/2 h-0 rounded-full  shadow-[0px_0px_200px_100px_#FCD6D6] z-40  hidden lg:block"></div>
          <div className="absolute top-[48rem] right-5 w-0 h-2 rounded-full  shadow-[0px_0px_300px_300px_#FBF0D3] z-50 hidden lg:block "></div>
        </main>
      </div>
    </MainLayout>
  );
}

export function PathSection() {
  const { selectedPath, setSelectedPath, handleNext } = useCompare();
  const studyPaths = [
    {
      id: "ug",
      label: "UG",
      n_icon_path: "/icons/normal/hat.svg",
      s_icon_path: "/icons/selected/hat.svg",
    },
    {
      id: "pg",
      label: "PG",
      n_icon_path: "/icons/normal/degree.svg",
      s_icon_path: "/icons/selected/degree.svg",
    },
    {
      id: "executive",
      label: "Executive Programs",
      n_icon_path: "/icons/normal/e-program.svg",
      s_icon_path: "/icons/selected/e-program.svg",
    },
    {
      id: "certifications",
      label: "Certifications",
      n_icon_path: "/icons/normal/cert.svg",
      s_icon_path: "/icons/selected/cert.svg",
    },
    {
      id: "law",
      label: "Law",
      n_icon_path: "/icons/normal/law.svg",
      s_icon_path: "/icons/selected/law.svg",
    },
    {
      id: "doctorate",
      label: "Doctorate/Ph.D.",
      n_icon_path: "/icons/normal/doctor.svg",
      s_icon_path: "/icons/selected/doctor.svg",
    },
  ];
  return (
    <div className="grid  lg:w-[29.625rem] h-[37.188rem] border-3 rounded-2xl border-white z-50 m-2  ">
      <Card className="shadow-xl h-[35.688rem] lg:w-[28rem] m-2 ">
        <CardHeader>
          <CardTitle className="text-[1.25rem] text-center">
            Select Your Study Path
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-2">
            {studyPaths.map((path) => (
              <Card
                key={path.id}
                className={`cursor-pointer transition-all shadow-none h-[122px] ${
                  selectedPath === path.id
                    ? "border-2 border-[#B8B8B8] "
                    : "border-2  border-[#B8B8B8] "
                }`}
                onClick={() => setSelectedPath(path.id)}
              >
                <CardContent className="relative grid place-content-center text-center space-y-2 py-1 ">
                  <img
                    src={
                      selectedPath === path.id
                        ? path.s_icon_path
                        : path.n_icon_path
                    }
                    className="mx-auto h-[2.063rem]"
                  />

                  <p className="text-[0.875rem] lg:text-[1rem] leading-tight font-medium text-[#B8B8B8]">
                    {path.label}
                  </p>
                  <Checkbox
                    checked={selectedPath === path.id}
                    onCheckedChange={() => setSelectedPath(path.id)}
                    className="absolute -top-4 right-2"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="destructive"
            onClick={handleNext}
            size="lg"
            className="w-full text-lg font-medium h-[3.438rem]"
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function CourseSection() {
  const { selectedCourse, setSelectedCourse, handleNext, handlePrevious } =
    useCompare();

  const courses = [
    {
      id: "mca",
      label: "MCA",
      n_icon_path: "/icons/normal/mca.svg",
      s_icon_path: "/icons/selected/mca.svg",
    },
    {
      id: "ma",
      label: "MA",
      n_icon_path: "/icons/normal/ma.svg",
      s_icon_path: "/icons/selected/ma.svg",
    },
    {
      id: "mcom",
      label: "M COM",
      n_icon_path: "/icons/normal/mcom.svg",
      s_icon_path: "/icons/selected/mcom.svg",
    },
    {
      id: "omba",
      label: "Online MBA",
      n_icon_path: "/icons/normal/omba.svg",
      s_icon_path: "/icons/selected/omba.svg",
    },
    {
      id: "emba",
      label: "Executive MBA",
      n_icon_path: "/icons/normal/emba.svg",
      s_icon_path: "/icons/selected/emba.svg",
    },
    {
      id: "majmc",
      label: "MAJMC",
      n_icon_path: "/icons/normal/majmc.svg",
      s_icon_path: "/icons/selected/majmc.svg",
    },
  ];

  return (
    <div className="grid lg:w-[29.625rem] h-[37.188rem] border-3 rounded-2xl border-white z-50 m-2  ">
      <Card className="shadow-xl h-[35.688rem] lg:w-[28rem] m-2 ">
        <CardHeader>
          <CardTitle className="text-[1.25rem] text-center">
            Choose the Online Course
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-2">
            {courses.map((path, _) => (
              <Card
                key={_}
                className={`cursor-pointer transition-all shadow-none h-[122px] ${
                  selectedCourse === path.id
                    ? "border-2 border-[#B8B8B8] "
                    : "border-2  border-[#B8B8B8] "
                }`}
                onClick={() => setSelectedCourse(path.id)}
              >
                <CardContent className="relative grid place-content-center text-center space-y-2 py-1 ">
                  <img
                    src={
                      selectedCourse === path.id
                        ? path.s_icon_path
                        : path.n_icon_path
                    }
                    className="mx-auto h-[2.063rem]"
                  />

                  <p className="text-[0.875rem] lg:text-[1rem] leading-tight font-medium text-[#B8B8B8]">
                    {path.label}
                  </p>
                  <Checkbox
                    checked={selectedCourse === path.id}
                    onCheckedChange={() => setSelectedCourse(path.id)}
                    className="absolute -top-4 right-2"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex gap-2 w-full">
            <Button
              variant="default"
              size="lg"
              onClick={handlePrevious}
              className="flex-1 text-lg font-medium h-[3.438rem]"
            >
              Previous
            </Button>
            <Button
              variant="destructive"
              size="lg"
              onClick={handleNext}
              className="flex-1 text-lg font-medium h-[3.438rem]"
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export function SpecializationSection() {
  const {
    selectedSpecialization,
    setSelectedSpecialization,
    handleNext,
    handlePrevious,
  } = useCompare();

  const specializations = [
    {
      id: "general",
      label: "General Management",
      s_icon_path: "/icons/selected/gm.svg",
      n_icon_path: "/icons/normal/gm.svg",
    },
    {
      id: "industrial",
      label: "Industrial Business",
      s_icon_path: "/icons/selected/ib.svg",
      n_icon_path: "/icons/normal/ib.svg",
    },
    {
      id: "operations",
      label: "Operation Management",
      s_icon_path: "/icons/selected/om.svg",
      n_icon_path: "/icons/normal/om.svg",
    },
    {
      id: "finance",
      label: "Finance",
      s_icon_path: "/icons/selected/finance.svg",
      n_icon_path: "/icons/normal/finance.svg",
    },
    {
      id: "marketing",
      label: "Marketing",
      s_icon_path: "/icons/selected/marketing.svg",
      n_icon_path: "/icons/normal/marketing.svg",
    },
    {
      id: "entrepreneurship",
      label: "Entrepreneurship",
      s_icon_path: "/icons/selected/entp.svg",
      n_icon_path: "/icons/normal/entp.svg",
    },
  ];

  return (
    <div className="grid lg:w-[29.625rem] h-[37.188rem] border-3 rounded-2xl border-white z-50 m-2">
      <Card className="shadow-xl h-[35.688rem] lg:w-[28rem] m-2">
        <CardHeader>
          <CardTitle className="text-[1.25rem] text-center">
            Choose Your Specialization
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-2">
            {specializations.map((path) => (
              <Card
                key={path.id}
                className={`cursor-pointer transition-all shadow-none h-[122px] ${
                  selectedSpecialization === path.id
                    ? "border-2 border-[#B8B8B8]"
                    : "border-2 border-[#B8B8B8]"
                }`}
                onClick={() => setSelectedSpecialization(path.id)}
              >
                <CardContent className="relative grid place-content-center text-center space-y-2 py-1">
                  <img
                    src={
                      selectedSpecialization === path.id
                        ? path.s_icon_path
                        : path.n_icon_path
                    }
                    className="mx-auto h-[2.063rem]"
                    alt={path.label}
                  />
                  <p className="text-[0.875rem] lg:text-[1rem] leading-tight font-medium text-[#B8B8B8]">
                    {path.label}
                  </p>
                  <Checkbox
                    checked={selectedSpecialization === path.id}
                    onCheckedChange={() => setSelectedSpecialization(path.id)}
                    className="absolute -top-4 right-2"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex gap-2 w-full">
            <Button
              variant="default"
              size="lg"
              onClick={handlePrevious}
              className="flex-1 text-lg font-medium h-[3.438rem]"
            >
              Previous
            </Button>
            <Button
              variant="destructive"
              size="lg"
              onClick={handleNext}
              className="flex-1 text-lg font-medium h-[3.438rem]"
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function CompareSection() {
  const { selectedUniversity, setSelectedUniversity, handlePrevious } =
    useCompare();
  const universities = [
    { id: "u1", icon: "/icons/u1.png" },
    { id: "u2", icon: "/icons/u2.png" },
    { id: "u3", icon: "/icons/u3.png" },
    { id: "u4", icon: "/icons/u4.png" },
    { id: "u5", icon: "/icons/u5.png" },
    { id: "u6", icon: "/icons/u6.png" },
  ];
  return (
    <div className="grid  lg:w-[29.625rem]  h-[37.188rem] border-3 rounded-2xl border-white z-50 m-2  ">
      <Card className="shadow-xl md:h-[35.688rem] lg:w-[28rem] m-2 ">
        <CardHeader>
          <CardTitle className="text-[1.25rem] text-center">
            Compare the best online universities!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-2">
            {universities.map((path) => {
              const isSelected = selectedUniversity.includes(path.id);

              return (
                <Card
                  key={path.id}
                  className={`cursor-pointer transition-all shadow-none py-8 ${"border-2 border-[#B8B8B8]"}`}
                  onClick={() => {
                    setSelectedUniversity(
                      (prev) =>
                        prev.includes(path.id)
                          ? prev.filter((id) => id !== path.id) // remove if already selected
                          : [...prev, path.id] // add if not selected
                    );
                  }}
                >
                  <CardContent className="relative grid place-content-center text-center h-[3.5rem] py-1">
                    <img src={path.icon} className="mx-auto" />
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() =>
                        setSelectedUniversity((prev) =>
                          prev.includes(path.id)
                            ? prev.filter((id) => id !== path.id)
                            : [...prev, path.id]
                        )
                      }
                      className="absolute -top-4 right-2"
                    />
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="flex gap-2 w-full">
            <Button
              variant="default"
              size="lg"
              onClick={handlePrevious}
              className="flex-1 text-lg font-medium h-[3.438rem]"
            >
              Previous
            </Button>
            <Button
              variant="destructive"
              size="lg"
              className="flex-1 text-lg font-medium h-[3.438rem]"
            >
              Compare
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
