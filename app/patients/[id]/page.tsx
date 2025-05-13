"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, ChevronRight, FileText, User, Activity, Phone, Mail } from "lucide-react"
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

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("info")

  // Generate ECG data
  const generateEcgData = (variant: number) => {
    const baseValue = 0.8
    const points = 100
    const data = []

    for (let i = 0; i < points; i++) {
      // Create P wave
      if (i % 25 === 0) {
        data.push(baseValue + 0.1 + variant * 0.05)
      }
      // Create QRS complex
      else if (i % 25 === 5) {
        data.push(baseValue - 0.2 - variant * 0.05)
      } else if (i % 25 === 6) {
        data.push(baseValue + 0.5 + variant * 0.1)
      } else if (i % 25 === 7) {
        data.push(baseValue - 0.1 - variant * 0.05)
      }
      // Create T wave
      else if (i % 25 === 12) {
        data.push(baseValue + 0.2 + variant * 0.05)
      } else {
        data.push(baseValue + (Math.random() * 0.05 - 0.025))
      }
    }

    return data
  }

  const ecgData1 = {
    labels: Array.from({ length: 100 }, (_, i) => i),
    datasets: [
      {
        label: "ECG Reading (May 13, 2025)",
        data: generateEcgData(0),
        borderColor: "rgb(220, 38, 38)",
        backgroundColor: "rgba(220, 38, 38, 0.1)",
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.2,
      },
    ],
  }

  const ecgData2 = {
    labels: Array.from({ length: 100 }, (_, i) => i),
    datasets: [
      {
        label: "ECG Reading (April 15, 2025)",
        data: generateEcgData(1),
        borderColor: "rgb(79, 70, 229)",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
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
        display: true,
        position: "top" as const,
      },
    },
    animation: {
      duration: 0,
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Link href="/patients" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">Patient Details</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-500">ID: P-2023-001 • 58 years</p>
          </div>
        </div>

        <Tabs defaultValue="info" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="history">ECG History</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">John Robert Doe</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="font-medium">March 15, 1967 (58 years)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">john.doe@example.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Medical History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Conditions</p>
                    <ul className="list-disc list-inside mt-1">
                      <li>Hypertension (diagnosed 2018)</li>
                      <li>Type 2 Diabetes (diagnosed 2020)</li>
                      <li>History of Palpitations</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Medications</p>
                    <ul className="list-disc list-inside mt-1">
                      <li>Lisinopril 10mg daily</li>
                      <li>Metformin 500mg twice daily</li>
                      <li>Aspirin 81mg daily</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Allergies</p>
                    <ul className="list-disc list-inside mt-1">
                      <li>Penicillin</li>
                      <li>Sulfa drugs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <Link href="/demo" className="flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Atrial Fibrillation</p>
                      <p className="text-sm text-gray-500">May 13, 2025 • 10:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full mr-2">
                      Alert
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>

                <div className="border-t"></div>

                <Link href="/demo" className="flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Left Bundle Branch Block</p>
                      <p className="text-sm text-gray-500">April 15, 2025 • 9:15 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full mr-2">
                      Caution
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>

                <div className="border-t"></div>

                <Link href="/demo" className="flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Sinus Tachycardia</p>
                      <p className="text-sm text-gray-500">March 2, 2025 • 2:45 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full mr-2">
                      Caution
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>

                <div className="border-t"></div>

                <Link href="/demo" className="flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Normal Sinus Rhythm</p>
                      <p className="text-sm text-gray-500">January 10, 2025 • 11:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full mr-2">
                      Normal
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
              </CardContent>
            </Card>

            <Button className="w-full">
              <FileText className="w-4 h-4 mr-2" />
              Generate Comprehensive Report
            </Button>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">ECG Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 mb-6">
                  <Line
                    data={{
                      labels: Array.from({ length: 100 }, (_, i) => i),
                      datasets: [...ecgData1.datasets, ...ecgData2.datasets],
                    }}
                    options={chartOptions}
                  />
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-800 mb-2">Key Changes Detected:</h3>
                    <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                      <li>Increased irregularity in rhythm</li>
                      <li>Prolonged QRS complex (110ms vs 95ms)</li>
                      <li>Absence of clear P waves in recent reading</li>
                      <li>Increased heart rate (118 bpm vs 92 bpm)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg text-sm">
                    <h3 className="font-medium text-blue-800 mb-2">Clinical Interpretation:</h3>
                    <p className="text-blue-700 mb-2">
                      The comparison shows progression from sinus tachycardia to atrial fibrillation, with
                      characteristic absence of P waves and irregular R-R intervals in the most recent ECG.
                    </p>
                    <p className="text-blue-700">Recommended follow-up with cardiologist within 48 hours.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">
                <FileText className="w-4 h-4 mr-2" />
                Export Comparison
              </Button>

              <Button className="flex-1">Share with Physician</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
