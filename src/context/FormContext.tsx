
import React, { createContext, useContext, useState } from "react";

interface FormState {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  complaintDetails: {
    title: string;
    description: string;
    category: string;
  };
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    } | null;
  };
  files: File[];
}

interface FormContextType {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  progress: number;
  validateStep: (step: number) => boolean;
  stepCompleted: (step: number) => boolean;
}

const initialFormState: FormState = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  complaintDetails: {
    title: "",
    description: "",
    category: "general",
  },
  location: {
    address: "",
    coordinates: null,
  },
  files: [],
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [currentStep, setCurrentStep] = useState(0);
  
  // Calculate progress based on current step and form completion
  const progress = ((currentStep + 1) / 5) * 100;
  
  // Validate specific steps
  const validateStep = (step: number): boolean => {
    switch (step) {
      case 0: // Personal information
        return (
          !!formState.personalInfo.name &&
          !!formState.personalInfo.email &&
          !!formState.personalInfo.phone
        );
      case 1: // Complaint details
        return (
          !!formState.complaintDetails.title &&
          !!formState.complaintDetails.description &&
          !!formState.complaintDetails.category
        );
      case 2: // Location
        return !!formState.location.coordinates;
      case 3: // Files - Optional, so always valid
        return true;
      case 4: // Review - Always valid if we got here
        return true;
      default:
        return false;
    }
  };
  
  // Check if a step has been completed
  const stepCompleted = (step: number): boolean => {
    if (step > currentStep) return false;
    return validateStep(step);
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        setFormState,
        currentStep,
        setCurrentStep,
        progress,
        validateStep,
        stepCompleted,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
