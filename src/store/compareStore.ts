import { defineStore } from "pinia";
import { ref, computed } from "vue";

type StepType = "path" | "course" | "specialization" | "compare";

export const useCompareStore = defineStore("compare", () => {
  // State
  const currentStep = ref<StepType>("path");
  const selectedPath = ref<string | null>(null);
  const selectedCourse = ref<string | null>(null);
  const selectedSpecialization = ref<string | null>(null);
  const selectedUniversity = ref<string[]>([]);

  // Constants
  const steps: StepType[] = ["path", "course", "specialization", "compare"];

  // Getters (if needed)
  const currentStepIndex = computed(() => steps.indexOf(currentStep.value));
  const isFirstStep = computed(() => currentStepIndex.value === 0);
  const isLastStep = computed(
    () => currentStepIndex.value === steps.length - 1
  );

  // Actions
  function setSelectedPath(pathId: string) {
    selectedPath.value = pathId;
  }

  function setSelectedCourse(courseId: string) {
    selectedCourse.value = courseId;
  }

  function setSelectedSpecialization(specializationId: string) {
    selectedSpecialization.value = specializationId;
  }

  function setSelectedUniversity(universityIds: string[]) {
    selectedUniversity.value = universityIds;
  }

  const toggleUniversity = (id: string) => {
    const isSelected = selectedUniversity.value.includes(id);

    if (isSelected) {
      // Remove if already selected
      setSelectedUniversity(selectedUniversity.value.filter((u) => u !== id));
    } else if (selectedUniversity.value.length < 3) {
      // Add only if less than 3 selected
      setSelectedUniversity([...selectedUniversity.value, id]);
    }
  };

  function handleNext() {
    const currentIndex = steps.indexOf(currentStep.value);
    if (currentIndex < steps.length - 1) {
      currentStep.value = steps[currentIndex + 1] as StepType;
    } else {
      currentStep.value = "path";
    }
  }

  function handlePrevious() {
    const currentIndex = steps.indexOf(currentStep.value);
    if (currentIndex > 0) {
      currentStep.value = steps[currentIndex - 1] as StepType;
    } else {
      currentStep.value = "compare";
    }
  }

  function resetStore() {
    currentStep.value = "path";
    selectedPath.value = null;
    selectedCourse.value = null;
    selectedSpecialization.value = null;
    selectedUniversity.value = [];
  }

  return {
    // State
    currentStep,
    selectedPath,
    selectedCourse,
    selectedSpecialization,
    selectedUniversity,
    // Getters
    currentStepIndex,
    isFirstStep,
    isLastStep,
    // Actions
    setSelectedPath,
    setSelectedCourse,
    setSelectedSpecialization,
    setSelectedUniversity,
    handleNext,
    handlePrevious,
    resetStore,
    toggleUniversity
  };
});
