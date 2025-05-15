"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Activity, Camera, FileText, History, ChevronRight, UserPlus } from "lucide-react"

interface TutorialScreenProps {
  onNext: () => void
  onBack: () => void
}

export default function TutorialScreen({ onNext, onBack }: TutorialScreenProps) {
  const [currentTutorial, setCurrentTutorial] = useState(0)

  const tutorials = [
    {
      title: "Patient Management",
      icon: <UserPlus className="w-8 h-8 text-blue-600" />,
      description: "Learn how to add and manage patient profiles for ECG analysis.",
      content: (
        <div className="space-y-4">
          <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <UserPlus className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="font-medium">Managing Patient Profiles</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>Navigate to the "Patients" tab in the main menu</li>
            <li>Tap the "+" button to add a new patient</li>
            <li>Fill in the required patient information</li>
            <li>Add optional medical history and lifestyle information if available</li>
            <li>Save the patient profile to begin ECG analysis</li>
            <li>Access patient history by tapping on any patient in the list</li>
          </ol>
        </div>
      ),
    },
    {
      title: "ECG Capture",
      icon: <Activity className="w-8 h-8 text-red-600" />,
      description: "Learn how to perform a live ECG reading using your connected device.",
      content: (
        <div className="space-y-4">
          <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <Activity className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="font-medium">How to Capture an ECG</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>Tap the "Capture" button in the main menu</li>
            <li>Select a patient or create a new patient profile</li>
            <li>Choose between device connection or camera scan</li>
            <li>For device: Ensure your ECG device is connected via Bluetooth</li>
            <li>Place the electrodes according to the device instructions</li>
            <li>Tap the "Start Capture" button on the app</li>
            <li>Remain still for 30 seconds while the ECG is being recorded</li>
            <li>Review the captured ECG and analysis results</li>
          </ol>
        </div>
      ),
    },
    {
      title: "Paper Scan",
      icon: <Camera className="w-8 h-8 text-purple-600" />,
      description: "Discover how to scan a paper-based ECG with OCR technology.",
      content: (
        <div className="space-y-4">
          <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="font-medium">How to Scan Paper ECGs</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>Tap the "Capture" button in the main menu</li>
            <li>Select a patient or create a new patient profile</li>
            <li>Select the "Camera Scan" option</li>
            <li>Place the ECG paper on a flat, well-lit surface</li>
            <li>Position the camera so the entire ECG is visible in the frame</li>
            <li>Hold the camera steady and tap "Capture"</li>
            <li>Adjust the corners if needed and confirm the scan</li>
            <li>Wait for the OCR processing to complete</li>
          </ol>
        </div>
      ),
    },
    {
      title: "Diagnosis Analysis",
      icon: <Activity className="w-8 h-8 text-amber-600" />,
      description: "Understand how to interpret the probability analysis dashboard.",
      content: (
        <div className="space-y-4">
          <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <Activity className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="font-medium">Understanding the Analysis Dashboard</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>
              <span className="font-medium">Probability Bars:</span> Show likelihood of different cardiac conditions
            </li>
            <li>
              <span className="font-medium">Color Coding:</span> Green (normal), Yellow (caution), Red (alert)
            </li>
            <li>
              <span className="font-medium">Key Measurements:</span> Heart rate, QRS duration, PR/QT intervals
            </li>
            <li>
              <span className="font-medium">Clinical References:</span> Medical literature supporting the analysis
            </li>
            <li>
              <span className="font-medium">Data Retention:</span> ECG data is stored for 12 hours unless saved to a
              patient profile
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Report Generation",
      icon: <FileText className="w-8 h-8 text-green-600" />,
      description: "Learn how to create, view, and share PDF reports.",
      content: (
        <div className="space-y-4">
          <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <FileText className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="font-medium">Working with Reports</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>After analysis is complete, tap "Generate Report"</li>
            <li>Review the report preview and add any notes if needed</li>
            <li>Save the report to the patient's profile</li>
            <li>Share the report via email or messaging apps</li>
            <li>Access all saved reports in the "Reports" section</li>
            <li>Compare reports over time to track patient progress</li>
          </ol>
        </div>
      ),
    },
    {
      title: "Patient History",
      icon: <History className="w-8 h-8 text-blue-600" />,
      description: "Navigate through historical ECG records and track changes over time.",
      content: (
        <div className="space-y-4">
          <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <History className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="font-medium">Managing Patient History</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>Access all patient records from the "Patients" tab</li>
            <li>Select a patient to view their complete history</li>
            <li>View a chronological list of all ECG readings for each patient</li>
            <li>Compare multiple ECGs to track changes over time</li>
            <li>Filter records by date, condition, or severity</li>
            <li>Generate comprehensive reports showing progression of cardiac health</li>
          </ul>
        </div>
      ),
    },
  ]

  const handleNext = () => {
    if (currentTutorial < tutorials.length - 1) {
      setCurrentTutorial(currentTutorial + 1)
    } else {
      onNext()
    }
  }

  const handleBack = () => {
    if (currentTutorial > 0) {
      setCurrentTutorial(currentTutorial - 1)
    } else {
      onBack()
    }
  }

  const handleSelectTutorial = (index: number) => {
    setCurrentTutorial(index)
  }

  const currentTutorialData = tutorials[currentTutorial]

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl font-bold mb-2">App Tutorial</h1>
      <p className="text-gray-600 mb-6">Learn how to use the key features of CorApp for optimal ECG analysis.</p>

      <div className="grid grid-cols-6 gap-2 mb-6">
        {tutorials.map((tutorial, index) => (
          <Button
            key={index}
            variant={currentTutorial === index ? "default" : "outline"}
            size="sm"
            className="p-2 h-auto"
            onClick={() => handleSelectTutorial(index)}
          >
            <span className="sr-only">{tutorial.title}</span>
            {index + 1}
          </Button>
        ))}
      </div>

      <Card className="flex-1 mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              {currentTutorialData.icon}
            </div>
            <h2 className="text-xl font-bold mb-2">{currentTutorialData.title}</h2>
            <p className="text-gray-600">{currentTutorialData.description}</p>
          </div>

          <div className="mt-6">{currentTutorialData.content}</div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" onClick={handleBack} className="flex-1">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleNext} className="flex-1">
          {currentTutorial < tutorials.length - 1 ? (
            <>
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Complete Tutorial
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
