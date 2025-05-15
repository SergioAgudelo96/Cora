"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AlertCircle, Clock, Search, User, UserPlus } from "lucide-react"

interface PatientSelectionScreenProps {
  onPatientSelected: (patientId: string | null) => void
}

export default function PatientSelectionScreen({ onPatientSelected }: PatientSelectionScreenProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock patient data
  const patients = [
    { id: "1", name: "John Doe", age: 58, lastCapture: "2 days ago" },
    { id: "2", name: "Sarah Johnson", age: 64, lastCapture: "1 week ago" },
    { id: "3", name: "Michael Brown", age: 72, lastCapture: "3 days ago" },
  ]

  const filteredPatients = patients.filter((patient) => patient.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex flex-col space-y-6">
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-amber-800 mb-1">Data Retention Notice</h3>
              <p className="text-sm text-amber-700">
                ECG capture data will be stored for only <strong>12 hours</strong> unless saved to a patient profile.
                Please ensure you save important readings to prevent data loss.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Capture ECG for:</h2>

        <Link href="/patients/new" className="block">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">New Patient</h3>
                  <p className="text-sm text-gray-500">Create a new patient profile</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <div>
          <h3 className="text-sm font-medium mb-2">Existing Patient</h3>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search patients..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <Card
                  key={patient.id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => onPatientSelected(patient.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <User className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-gray-500">
                            {patient.age} years • Last capture: {patient.lastCapture}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{patient.lastCapture}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <User className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                <p className="font-medium">No patients found</p>
                <p className="text-sm">Try a different search or create a new patient</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
