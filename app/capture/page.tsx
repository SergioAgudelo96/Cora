"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PatientSelectionScreen from "@/components/capture/patient-selection-screen"
import CaptureMethodScreen from "@/components/capture/capture-method-screen"

export default function CapturePage() {
  const [stage, setStage] = useState<"patient-selection" | "capture-method">("patient-selection")
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null)

  const handlePatientSelected = (patientId: string | null) => {
    setSelectedPatientId(patientId)
    setStage("capture-method")
  }

  const handleBackToPatientSelection = () => {
    setStage("patient-selection")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">{stage === "patient-selection" ? "Select Patient" : "Capture ECG"}</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        {stage === "patient-selection" && <PatientSelectionScreen onPatientSelected={handlePatientSelected} />}

        {stage === "capture-method" && (
          <CaptureMethodScreen patientId={selectedPatientId} onBack={handleBackToPatientSelection} />
        )}
      </main>
    </div>
  )
}
