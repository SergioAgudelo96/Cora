"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import PatientBasicInfoScreen from "@/components/patients/patient-basic-info-screen"
import PatientMedicalHistoryScreen from "@/components/patients/patient-medical-history-screen"
import PatientLifestyleScreen from "@/components/patients/patient-lifestyle-screen"

const steps = ["Basic Info", "Medical History", "Lifestyle"]

export default function NewPatientPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Save patient data and redirect to patients list
      router.push("/patients")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Link href="/patients" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">New Patient</h1>
        </div>
      </header>

      <div className="container px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-700">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
          </p>
        </div>
        <Progress value={progress} className="h-1" />
      </div>

      <main className="flex-1 container px-4 py-6 flex flex-col">
        {currentStep === 0 && <PatientBasicInfoScreen onNext={handleNext} />}
        {currentStep === 1 && <PatientMedicalHistoryScreen onNext={handleNext} onBack={handleBack} />}
        {currentStep === 2 && (
          <PatientLifestyleScreen onNext={() => router.push("/patients")} onBack={handleBack} isLastStep={true} />
        )}
      </main>
    </div>
  )
}
