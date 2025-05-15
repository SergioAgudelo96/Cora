"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Check, Shield } from "lucide-react"

interface PatientInsuranceScreenProps {
  onSave: () => void
  onBack: () => void
}

export default function PatientInsuranceScreen({ onSave, onBack }: PatientInsuranceScreenProps) {
  const [insurance, setInsurance] = useState({
    provider: "",
    policyNumber: "",
  })

  const handleInsuranceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInsurance({
      ...insurance,
      [name]: value,
    })
  }

  return (
    <div className="flex flex-col flex-1">
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600" />
            Insurance Information (Optional)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="provider">Insurance Provider</Label>
            <Input
              id="provider"
              name="provider"
              placeholder="Enter insurance provider name"
              value={insurance.provider}
              onChange={handleInsuranceChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="policyNumber">Policy Number</Label>
            <Input
              id="policyNumber"
              name="policyNumber"
              placeholder="Enter policy number"
              value={insurance.policyNumber}
              onChange={handleInsuranceChange}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-green-800">Ready to Save</h3>
              <p className="text-sm text-green-700">Patient profile is complete and ready to be saved</p>
            </div>
          </div>
          <p className="text-sm text-green-700 mb-4">
            You've completed all the required information. Optional fields can be updated later if needed.
          </p>
        </CardContent>
      </Card>

      <div className="flex gap-3 mt-6">
        <Button variant="outline" onClick={onBack} className="flex-1">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={onSave} className="flex-1">
          Save Patient Profile
        </Button>
      </div>
    </div>
  )
}
