"use client"

import { Button } from "@/components/ui/button"
import { Activity, ArrowRight, Info } from "lucide-react"
import Link from "next/link"

interface WelcomeScreenProps {
  onNext: () => void
}

export default function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center">
      <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mb-6">
        <Activity className="w-12 h-12 text-red-600" />
      </div>

      <h1 className="text-3xl font-bold mb-2">Welcome to CorApp, Doctor</h1>

      <p className="text-xl font-medium text-red-600 mb-6">Let's set up your physician account</p>

      <p className="text-gray-600 mb-8 max-w-md">
        Complete this quick setup to customize CorApp for your practice. We'll help you configure your device, set up
        your professional profile, and learn the key features.
      </p>

      <div className="space-y-3 w-full max-w-xs">
        <Button size="lg" className="w-full" onClick={onNext}>
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <Link href="/learn-more">
          <Button variant="outline" size="lg" className="w-full">
            <Info className="mr-2 h-4 w-4" />
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  )
}
