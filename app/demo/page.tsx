"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, FileText, Activity, AlertTriangle, Clock } from "lucide-react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function DemoPage() {
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [progress, setProgress] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(12 * 60) // 12 hours in minutes

  useEffect(() => {
    // Simulate countdown timer for data retention
    const timer = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1))
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  // Format time remaining
  const formatTimeRemaining = () => {
    const hours = Math.floor(timeRemaining / 60)
    const minutes = timeRemaining % 60
    return `${hours}h ${minutes}m`
  }

  // Generate ECG data
  const generateEcgData = () => {
    const baseValue = 0.8
    const points = 100
    const data = []

    for (let i = 0; i < points; i++) {
      // Create P wave
      if (i % 25 === 0) {
        data.push(baseValue + 0.1)
      }
      // Create QRS complex
      else if (i % 25 === 5) {
        data.push(baseValue - 0.2)
      } else if (i % 25 === 6) {
        data.push(baseValue + 0.5)
      } else if (i % 25 === 7) {
        data.push(baseValue - 0.1)
      }
      // Create T wave
      else if (i % 25 === 12) {
        data.push(baseValue + 0.2)
      } else {
        data.push(baseValue + (Math.random() * 0.05 - 0.025))
      }
    }

    return data
  }

  const ecgData = {
    labels: Array.from({ length: 100 }, (_, i) => i),
    datasets: [
      {
        label: "ECG Reading",
        data: generateEcgData(),
        borderColor: "rgb(220, 38, 38)",
        backgroundColor: "rgba(220, 38, 38, 0.1)",
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        min: 0,
        max: 1.5,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 0,
    },
  }

  const handleStartAnalysis = () => {
    setAnalyzing(true)

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setAnalysisComplete(true)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Link href="/capture" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">ECG Analysis</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <Card className="bg-amber-50 border-amber-200 mb-6">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-amber-800 mb-1">Data Retention Notice</h3>
                <p className="text-sm text-amber-700">
                  This ECG data will be automatically deleted in <strong>{formatTimeRemaining()}</strong> unless saved
                  to a patient profile.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-500" />
              Live ECG Reading
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <Line data={ecgData} options={chartOptions} />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>0s</span>
              <span>1s</span>
              <span>2s</span>
              <span>3s</span>
              <span>4s</span>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Patient Information</h2>
            <span className="text-sm text-gray-500">ID: ECG-2023-0042</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">John Doe</p>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-medium">58 years</p>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-medium">Male</p>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium">May 13, 2025</p>
            </div>
          </div>
        </div>

        {!analyzing && !analysisComplete && (
          <Button className="w-full mt-6" size="lg" onClick={handleStartAnalysis}>
            Start Analysis
          </Button>
        )}

        {analyzing && !analysisComplete && (
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3">Analyzing ECG...</h3>
              <Progress value={progress} className="h-2 mb-4" />
              <div className="text-sm text-gray-600 space-y-2">
                <p>• Detecting rhythm patterns</p>
                <p>• Analyzing P, QRS, and T segments</p>
                <p>• Comparing with clinical guidelines</p>
                <p>• Generating probability analysis</p>
              </div>
            </CardContent>
          </Card>
        )}

        {analysisComplete && (
          <div className="space-y-4 mt-6">
            <h2 className="text-lg font-bold">Analysis Results</h2>

            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-amber-800">Potential Abnormality Detected</h3>
                    <p className="text-sm text-gray-600">The analysis indicates potential cardiac irregularities.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <h3 className="font-medium">Probability Analysis</h3>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Atrial Fibrillation</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Left Bundle Branch Block</span>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Sinus Tachycardia</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Normal Sinus Rhythm</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Key Measurements</h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xs text-gray-500">Heart Rate</p>
                  <p className="font-medium">118 bpm</p>
                </div>

                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xs text-gray-500">QRS Duration</p>
                  <p className="font-medium">110 ms</p>
                </div>

                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xs text-gray-500">PR Interval</p>
                  <p className="font-medium">160 ms</p>
                </div>

                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xs text-gray-500">QT Interval</p>
                  <p className="font-medium">380 ms</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Clinical References</h3>

              <div className="bg-blue-50 p-4 rounded-lg text-sm">
                <p className="font-medium text-blue-800 mb-2">Suggested Medical References:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-700">
                  <li>AHA Guidelines for Management of Atrial Fibrillation (2023)</li>
                  <li>ESC Clinical Practice Guidelines for Cardiac Arrhythmias</li>
                  <li>Dubin's Interpretation: Chapter 8 - Atrial Arrhythmias</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1">
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>

              <Link href="/patients" className="flex-1">
                <Button className="w-full">
                  Save to Patient History
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
