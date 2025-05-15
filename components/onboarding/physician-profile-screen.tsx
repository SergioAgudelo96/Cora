"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, User, Building, Award } from "lucide-react"

interface PhysicianProfileScreenProps {
  onNext: () => void
  onBack: () => void
}

export default function PhysicianProfileScreen({ onNext, onBack }: PhysicianProfileScreenProps) {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialty: "",
    licenseNumber: "",
    institution: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile({
      ...profile,
      [name]: value,
    })
  }

  const isProfileValid = profile.fullName && profile.email

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl font-bold mb-2">Your Physician Profile</h1>
      <p className="text-gray-600 mb-6">
        Set up your profile as a healthcare professional. This information helps personalize your experience.
      </p>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Dr. Jane Smith"
              value={profile.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jane.smith@hospital.org"
              value={profile.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={profile.phone}
              onChange={handleChange}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Award className="w-5 h-5 text-green-600" />
            Professional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="specialty">Medical Specialty</Label>
            <Input
              id="specialty"
              name="specialty"
              placeholder="Cardiology"
              value={profile.specialty}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="licenseNumber">License Number</Label>
            <Input
              id="licenseNumber"
              name="licenseNumber"
              placeholder="License/Registration Number"
              value={profile.licenseNumber}
              onChange={handleChange}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Building className="w-5 h-5 text-purple-600" />
            Institution
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-2">
            <Label htmlFor="institution">Hospital/Clinic Name</Label>
            <Input
              id="institution"
              name="institution"
              placeholder="General Hospital"
              value={profile.institution}
              onChange={handleChange}
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
        <Button onClick={onNext} disabled={!isProfileValid} className="flex-1">
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
