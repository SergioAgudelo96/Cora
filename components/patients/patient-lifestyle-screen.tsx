"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Check, Activity } from "lucide-react"

interface PatientLifestyleScreenProps {
  onNext: () => void
  onBack: () => void
  isLastStep?: boolean
}

export default function PatientLifestyleScreen({ onNext, onBack, isLastStep = false }: PatientLifestyleScreenProps) {
  const [lifestyle, setLifestyle] = useState({
    smoking: "",
    alcohol: "",
    activityLevel: "",
    diet: "",
  })

  return (
    <div className="flex flex-col flex-1">
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-600" />
            Lifestyle Information (Optional)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="smoking">Smoking Habits</Label>
            <Select value={lifestyle.smoking} onValueChange={(value) => setLifestyle({ ...lifestyle, smoking: value })}>
              <SelectTrigger id="smoking">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="never">Never Smoked</SelectItem>
                <SelectItem value="former">Former Smoker</SelectItem>
                <SelectItem value="occasional">Occasional Smoker</SelectItem>
                <SelectItem value="regular">Regular Smoker</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="alcohol">Alcohol Consumption</Label>
            <Select value={lifestyle.alcohol} onValueChange={(value) => setLifestyle({ ...lifestyle, alcohol: value })}>
              <SelectTrigger id="alcohol">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="occasional">Occasional</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="heavy">Heavy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="activityLevel">Physical Activity Level</Label>
            <Select
              value={lifestyle.activityLevel}
              onValueChange={(value) => setLifestyle({ ...lifestyle, activityLevel: value })}
            >
              <SelectTrigger id="activityLevel">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary</SelectItem>
                <SelectItem value="light">Light Activity</SelectItem>
                <SelectItem value="moderate">Moderate Activity</SelectItem>
                <SelectItem value="active">Very Active</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="diet">Diet Preferences</Label>
            <Textarea
              id="diet"
              placeholder="Describe diet preferences or restrictions"
              value={lifestyle.diet}
              onChange={(e) => setLifestyle({ ...lifestyle, diet: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      {isLastStep && (
        <Card className="bg-green-50 border-green-200 mb-6">
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
            <p className="text-sm text-green-700">
              You've completed all the required information. Optional fields can be updated later if needed.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="flex gap-3 mt-auto">
        <Button variant="outline" onClick={onBack} className="flex-1">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={onNext} className="flex-1">
          {isLastStep ? "Save Patient Profile" : "Next"}
        </Button>
      </div>
    </div>
  )
}
