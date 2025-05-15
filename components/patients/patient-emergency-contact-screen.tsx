"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Phone } from "lucide-react"

interface PatientEmergencyContactScreenProps {
  onNext: () => void
  onBack: () => void
}

export default function PatientEmergencyContactScreen({ onNext, onBack }: PatientEmergencyContactScreenProps) {
  const [emergency, setEmergency] = useState({
    contactName: "",
    relationship: "",
    contactPhone: "",
  })

  const handleEmergencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEmergency({
      ...emergency,
      [name]: value,
    })
  }

  const isEmergencyValid = emergency.contactName && emergency.relationship && emergency.contactPhone

  return (
    <div className="flex flex-col flex-1">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-600" />
            Emergency Contact
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contactName">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="contactName"
              name="contactName"
              placeholder="Enter emergency contact name"
              value={emergency.contactName}
              onChange={handleEmergencyChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="relationship">
              Relationship <span className="text-red-500">*</span>
            </Label>
            <Input
              id="relationship"
              name="relationship"
              placeholder="Enter relationship to patient"
              value={emergency.relationship}
              onChange={handleEmergencyChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactPhone">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="contactPhone"
              name="contactPhone"
              type="tel"
              placeholder="Enter emergency contact phone"
              value={emergency.contactPhone}
              onChange={handleEmergencyChange}
            />
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-500 mt-4">
        <span className="text-red-500">*</span> Required fields
      </div>

      <div className="flex gap-3 mt-6">
        <Button variant="outline" onClick={onBack} className="flex-1">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={onNext} disabled={!isEmergencyValid} className="flex-1">
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
