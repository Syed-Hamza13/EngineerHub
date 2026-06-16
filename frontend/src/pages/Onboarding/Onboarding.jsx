import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProgressBar from "../../components/onboarding/ProgressBar";
import OnboardingHeader from "../../components/onboarding/OnboardingHeader";
import OnboardingFooter from "../../components/onboarding/OnboardingFooter";

import SkillsStep from "../../components/onboarding/SkillsStep";
import AlgorithmsStep from "../../components/onboarding/AlgorithmsStep";
import TechStackStep from "../../components/onboarding/TechStackStep";
import InterestsStep from "../../components/onboarding/InterestsStep";
import SetupStep from "../../components/onboarding/SetupStep";

function Onboarding() {
  const navigate = useNavigate();

  const TOTAL_STEPS = 5;

  const [currentStep, setCurrentStep] = useState(1);

  // Future backend payload
  const [onboardingData, setOnboardingData] = useState({
    skills: [],
    algorithms: [],
    techStack: [],
    interests: [],
  });

  const progress = (currentStep / TOTAL_STEPS) * 100;

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Future save handlers
  const saveSkills = (skills) => {
    setOnboardingData((prev) => ({
      ...prev,
      skills,
    }));

    nextStep();
  };

  const saveAlgorithms = (algorithms) => {
    setOnboardingData((prev) => ({
      ...prev,
      algorithms,
    }));

    nextStep();
  };

  const saveTechStack = (techStack) => {
    setOnboardingData((prev) => ({
      ...prev,
      techStack,
    }));

    nextStep();
  };

  const saveInterests = (interests) => {
    setOnboardingData((prev) => ({
      ...prev,
      interests,
    }));

    nextStep();
  };

  const handleOnboardingComplete = () => {
    console.log("Final Onboarding Data:", onboardingData);

    /*
      Future Backend API

      await axios.post("/api/onboarding", {
        skills: onboardingData.skills,
        algorithms: onboardingData.algorithms,
        techStack: onboardingData.techStack,
        interests: onboardingData.interests,
      });

    */

    navigate("/dashboard");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <SkillsStep
            onNext={saveSkills}
          />
        );

      case 2:
        return (
          <AlgorithmsStep
            onNext={saveAlgorithms}
          />
        );

      case 3:
        return (
          <TechStackStep
            onNext={saveTechStack}
          />
        );

      case 4:
        return (
          <InterestsStep
            onNext={saveInterests}
          />
        );

      case 5:
        return (
          <SetupStep
            onComplete={handleOnboardingComplete}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* Progress Bar */}
      <ProgressBar progress={progress} />

      {/* Header */}
      <OnboardingHeader />

      {/* Step Content */}
      <div className="flex-1">
        {renderStep()}
      </div>

      {/* Footer only for steps 1-4 */}
      {currentStep !== 5 && (
        <OnboardingFooter
          onPrevious={previousStep}
          onNext={nextStep}
          nextText={
            currentStep === 4
              ? "Finish Setup"
              : "Next Step"
          }
        />
      )}

    </div>
  );
}

export default Onboarding;