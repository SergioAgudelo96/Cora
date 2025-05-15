"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Activity, AlertTriangle, FileText, User, Clock } from "lucide-react"
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

interface DashboardOverviewScreenProps {
  onNext: () => void
  onBack: () => void
}

export default function DashboardOverviewScreen({ onNext, onBack }: DashboardOverviewScreenProps) {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

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

  const handleFeatureClick = (feature: string) => {
    setActiveFeature(feature === activeFeature ? null : feature)
  }

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl font-bold mb-2">Dashboard Overview</h1>
      <p className="text-gray-600 mb-6">
        Explore the main dashboard and learn how to navigate through the app's key features.
      </p>

      <div className="relative flex-1 mb-6">
        <Card className="mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-500" />
              Live ECG Reading
              {activeFeature === "ecg" && (
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">1</div>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40">
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

        <div className="grid grid-cols-2 gap-3 mb-4">
          <Card
            className={`cursor-pointer hover:shadow-md transition-shadow ${
              activeFeature === "alert" ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => handleFeatureClick("alert")}
          >
            <CardContent className="p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Anomaly Detection</p>
                  <p className="text-xs text-gray-500">Real-time alerts</p>
                </div>
                {activeFeature === "alert" && (
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    2
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer hover:shadow-md transition-shadow ${
              activeFeature === "reports" ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => handleFeatureClick("reports")}
          >
            <CardContent className="p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Reports</p>
                  <p className="text-xs text-gray-500">Generate & share</p>
                </div>
                {activeFeature === "reports" && (
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    3
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer hover:shadow-md transition-shadow ${
              activeFeature === "patients" ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => handleFeatureClick("patients")}
          >
            <CardContent className="p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Patients</p>
                  <p className="text-xs text-gray-500">Manage profiles</p>
                </div>
                {activeFeature === "patients" && (
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    4
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer hover:shadow-md transition-shadow ${
              activeFeature === "retention" ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => handleFeatureClick("retention")}
          >
            <CardContent className="p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Data Retention</p>
                  <p className="text-xs text-gray-500">12-hour limit</p>
                </div>
                {activeFeature === "retention" && (
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    5
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {activeFeature && (
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              {activeFeature === "ecg" && (
                <div className="space-y-2">
                  <h3 className="font-medium text-blue-800">Live ECG Visualization</h3>
                  <p className="text-sm text-blue-700">
                    Real-time display of ECG waveforms with automatic detection of P, QRS, and T segments. The graph
                    updates as data is received from the connected device.
                  </p>
                </div>
              )}

              {activeFeature === "alert" && (
                <div className="space-y-2">
                  <h3 className="font-medium text-blue-800">Anomaly Detection</h3>
                  <p className="text-sm text-blue-700">
                    The system automatically identifies potential cardiac irregularities and alerts you with color-coded
                    indicators: green (normal), yellow (caution), and red (alert).
                  </p>
                </div>
              )}

              {activeFeature === "reports" && (
                <div className="space-y-2">
                  <h3 className="font-medium text-blue-800">Report Generation</h3>
                  <p className="text-sm text-blue-700">
                    Create comprehensive PDF reports with ECG interpretation, probability analysis, and suggested
                    clinical references. Share reports via email or messaging apps.
                  </p>
                </div>
              )}

              {activeFeature === "patients" && (
                <div className="space-y-2">
                  <h3 className="font-medium text-blue-800">Patient Management</h3>
                  <p className="text-sm text-blue-700">
                    Maintain patient profiles with demographic information and medical history. Organize ECG readings by
                    patient for easy access and longitudinal monitoring.
                  </p>
                </div>
              )}

              {activeFeature === "retention" && (
                <div className="space-y-2">
                  <h3 className="font-medium text-blue-800">Data Retention Policy</h3>
                  <p className="text-sm text-blue-700">
                    ECG capture data is automatically deleted after 12 hours unless saved to a patient profile. Always
                    save important readings to prevent data loss.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="font-medium mb-2">Navigation Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          <li>Use the bottom navigation bar to switch between main sections</li>
          <li>Tap on any card to view more details or perform actions</li>
          <li>Pull down to refresh data on most screens</li>
          <li>Remember to save ECG data to patient profiles within 12 hours</li>
          <li>Use the search function to quickly find patients</li>
        </ul>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={onNext} className="flex-1">
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
