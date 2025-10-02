import React, { createContext, useContext, useState } from "react";

// Define all possible steps
type Step = "path" | "course" | "specialization" | "compare";

type CompareContextType = {
  currentStep: Step;
  setCurrentStep: React.Dispatch<React.SetStateAction<Step>>;

  selectedPath: string | null;
  setSelectedPath: React.Dispatch<React.SetStateAction<string | null>>;
 
  selectedUniversity: string | null;
  setSelectedUniversity: React.Dispatch<React.SetStateAction<string | null>>;

  selectedCourse: string | null;
  setSelectedCourse: React.Dispatch<React.SetStateAction<string | null>>;

  selectedSpecialization: string | null;
  setSelectedSpecialization: React.Dispatch<
    React.SetStateAction<string | null>
  >;

  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;

  handleNext: () => void;
  handlePrevious: () => void;
};

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState<Step>("path");
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string | null
  >(null);
  const [error, setError] = useState<string>("");

  const handleNext = () => {
    setError("");
    if (currentStep === "path") {
      if (!selectedPath) return setError("Please select a study path");
      setCurrentStep("course");
    } else if (currentStep === "course") {
      if (!selectedCourse) return setError("Please select a course");
      setCurrentStep("specialization");
    } else if (currentStep === "specialization") {
      if (!selectedSpecialization)
        return setError("Please select a specialization");
      setCurrentStep("compare");
    }
  };

  const handlePrevious = () => {
    setError("");
    if (currentStep === "course") setCurrentStep("path");
    else if (currentStep === "specialization") setCurrentStep("course");
    else if (currentStep === "compare") setCurrentStep("specialization");
  };

  return (
    <CompareContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedPath,
        setSelectedPath,
        selectedCourse,
        setSelectedCourse,
        selectedSpecialization,
        setSelectedSpecialization,
        selectedUniversity,
        setSelectedUniversity,
        error,
        setError,
        handleNext,
        handlePrevious,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

// Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompares must be used within a CompareProvider");
  }
  return context;
};
