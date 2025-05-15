"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import WelcomeScreen from "@/components/onboarding/welcome-screen"
import PermissionsScreen from "@/components/onboarding/permissions-screen"
import DeviceSetupScreen from "@/components/onboarding/device-setup-screen"
import PhysicianProfileScreen from "@/components/onboarding/physician-profile-screen"
import TutorialScreen from "@/components/onboarding/tutorial-screen"
import DashboardOverviewScreen from "@/components/onboarding/dashboard-overview-screen"
import CompletionScreen from "@/components/onboarding/completion-screen"

const steps = ["Welcome", "Permissions", "Device Setup", "Your Profile", "Tutorial", "Dashboard", "Complete"]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push("/")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    router.push("/")
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-gray-700">
              Account Setup: Step {currentStep + 1} of {steps.length}
            </p>
            {currentStep < steps.length - 1 && (
              <Button variant="ghost" size="sm" onClick={handleSkip}>
                Complete Later
              </Button>
            )}
          </div>
          <Progress value={progress} className="h-1" />
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 flex flex-col">
        {currentStep === 0 && <WelcomeScreen onNext={handleNext} />}
        {currentStep === 1 && <PermissionsScreen onNext={handleNext} onBack={handleBack} />}
        {currentStep === 2 && <DeviceSetupScreen onNext={handleNext} onBack={handleBack} />}
        {currentStep === 3 && <PhysicianProfileScreen onNext={handleNext} onBack={handleBack} />}
        {currentStep === 4 && <TutorialScreen onNext={handleNext} onBack={handleBack} />}
        {currentStep === 5 && <DashboardOverviewScreen onNext={handleNext} onBack={handleBack} />}
        {currentStep === 6 && <CompletionScreen onFinish={() => router.push("/")} onBack={handleBack} />}
      </main>
    </div>
  )
}
