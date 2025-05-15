"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

interface ProfileSetupScreenProps {
  onNext: () => void
  onBack: () => void
}

export default function ProfileSetupScreen({ onNext, onBack }: ProfileSetupScreenProps) {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [profileComplete, setProfileComplete] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof typeof profileData) => {
    setProfileData({
      ...profileData,
      [key]: e.target.value,
    })
  }

  const handleSubmit = () => {
    // Simulate profile creation
    setTimeout(() => {
      setProfileComplete(true)
    }, 1000)
  }

  const canContinue = profileComplete

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl font-bold mb-2">Profile Setup</h1>
      <p className="text-gray-600 mb-6">Create your profile to personalize your experience and save your settings.</p>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={profileData.name}
                onChange={(e) => handleChange(e, "name")}
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={profileData.email}
                onChange={(e) => handleChange(e, "email")}
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={profileData.phone}
                onChange={(e) => handleChange(e, "phone")}
              />
            </div>

            {!profileComplete ? (
              <Button className="w-full" onClick={handleSubmit}>
                Create Profile
              </Button>
            ) : (
              <div className="flex items-center justify-center text-green-600">
                <Check className="w-4 h-4 mr-1" />
                <span className="text-sm">Profile created successfully!</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3 mt-auto">
        <Button variant="outline" onClick={onBack} className="flex-1">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={onNext} disabled={!canContinue} className="flex-1">
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
