"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, HelpCircle, MessageSquare, Video } from "lucide-react"

interface CompletionScreenProps {
  onFinish: () => void
  onBack: () => void
}

export default function CompletionScreen({ onFinish, onBack }: CompletionScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center">
      <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>

      <h1 className="text-3xl font-bold mb-2">Account Setup Complete!</h1>

      <p className="text-gray-600 mb-8 max-w-md">
        Your physician account has been successfully set up. You're now ready to start using CorApp for ECG analysis and
        interpretation.
      </p>

      <Card className="w-full max-w-md mb-8">
        <CardContent className="p-6">
          <h2 className="font-bold text-lg mb-4">What's Next?</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Video className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-medium">Watch Tutorial Videos</p>
                <p className="text-sm text-gray-600">Explore detailed video guides on using all features</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="font-medium">Read Documentation</p>
                <p className="text-sm text-gray-600">Access comprehensive guides and best practices</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-left">
                <p className="font-medium">Contact Support</p>
                <p className="text-sm text-gray-600">Our team is ready to assist with any questions</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3 w-full max-w-xs">
        <Button size="lg" className="w-full" onClick={onFinish}>
          Go to Dashboard
        </Button>

        <Button variant="outline" size="lg" className="w-full" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
    </div>
  )
}
