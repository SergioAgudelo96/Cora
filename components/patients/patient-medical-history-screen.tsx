"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Heart, Upload } from "lucide-react"

interface PatientMedicalHistoryScreenProps {
  onNext: () => void
  onBack: () => void
}

export default function PatientMedicalHistoryScreen({ onNext, onBack }: PatientMedicalHistoryScreenProps) {
  const [medicalHistory, setMedicalHistory] = useState({
    atrialFibrillation: false,
    bradycardia: false,
    tachycardia: false,
    hypertension: false,
    diabetes: false,
    familyHistory: false,
    medications: "",
    allergies: "",
    surgeries: "",
  })

  const handleConditionChange = (condition: keyof typeof medicalHistory) => {
    setMedicalHistory({
      ...medicalHistory,
      [condition]: !medicalHistory[condition],
    })
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setMedicalHistory({
      ...medicalHistory,
      [name]: value,
    })
  }

  return (
    <div className="flex flex-col flex-1">
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-600" />
            Medical History (Optional)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="font-medium mb-4">Known Cardiac Conditions</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="atrialFibrillation"
                checked={medicalHistory.atrialFibrillation}
                onCheckedChange={() => handleConditionChange("atrialFibrillation")}
              />
              <Label htmlFor="atrialFibrillation">Atrial Fibrillation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="bradycardia"
                checked={medicalHistory.bradycardia}
                onCheckedChange={() => handleConditionChange("bradycardia")}
              />
              <Label htmlFor="bradycardia">Bradycardia</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="tachycardia"
                checked={medicalHistory.tachycardia}
                onCheckedChange={() => handleConditionChange("tachycardia")}
              />
              <Label htmlFor="tachycardia">Tachycardia</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hypertension"
                checked={medicalHistory.hypertension}
                onCheckedChange={() => handleConditionChange("hypertension")}
              />
              <Label htmlFor="hypertension">Hypertension</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="diabetes"
                checked={medicalHistory.diabetes}
                onCheckedChange={() => handleConditionChange("diabetes")}
              />
              <Label htmlFor="diabetes">Diabetes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="familyHistory"
                checked={medicalHistory.familyHistory}
                onCheckedChange={() => handleConditionChange("familyHistory")}
              />
              <Label htmlFor="familyHistory">Family History of Cardiac Conditions</Label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="medications">Current Medications</Label>
              <Textarea
                id="medications"
                name="medications"
                placeholder="List current medications"
                value={medicalHistory.medications}
                onChange={handleTextareaChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies">Allergies</Label>
              <Textarea
                id="allergies"
                name="allergies"
                placeholder="List any allergies"
                value={medicalHistory.allergies}
                onChange={handleTextareaChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="surgeries">Previous Surgeries</Label>
              <Textarea
                id="surgeries"
                name="surgeries"
                placeholder="List any previous surgeries"
                value={medicalHistory.surgeries}
                onChange={handleTextareaChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-medium mb-4">Previous ECG Records</h3>
          <p className="text-sm text-gray-600 mb-4">
            Upload any previous ECG records to establish a baseline for comparison.
          </p>
          <Button variant="outline" className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            Upload ECG Records
          </Button>
        </CardContent>
      </Card>

      <div className="flex gap-3 mt-6">
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
