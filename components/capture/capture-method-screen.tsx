"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ArrowLeft, Bluetooth, Camera, Check } from "lucide-react"
import Link from "next/link"

interface CaptureMethodScreenProps {
  patientId: string | null
  onBack: () => void
}

export default function CaptureMethodScreen({ patientId, onBack }: CaptureMethodScreenProps) {
  const [isScanning, setIsScanning] = useState(false)
  const [connectedDevice, setConnectedDevice] = useState<string | null>(null)
  const [ocrCalibrated, setOcrCalibrated] = useState(false)

  const handleScan = () => {
    setIsScanning(true)
    // Simulate finding a device after 2 seconds
    setTimeout(() => {
      setIsScanning(false)
      setConnectedDevice("CardioScan ECG-100")
    }, 2000)
  }

  const handleDisconnect = () => {
    setConnectedDevice(null)
  }

  const handleCalibrate = () => {
    // Simulate calibration process
    setTimeout(() => {
      setOcrCalibrated(true)
    }, 1500)
  }

  return (
    <div className="flex flex-col space-y-6">
      <Button variant="outline" onClick={onBack} className="w-fit">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Patient Selection
      </Button>

      {patientId && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <p className="text-sm text-blue-700">
              <span className="font-medium">Capturing for:</span>{" "}
              {patientId === "1" ? "John Doe" : patientId === "2" ? "Sarah Johnson" : "Michael Brown"}
            </p>
          </CardContent>
        </Card>
      )}

      {!patientId && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <p className="text-sm text-blue-700">
              <span className="font-medium">Capturing for:</span> New Patient (Profile will be created after capture)
            </p>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="camera" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="device">Device Connection</TabsTrigger>
          <TabsTrigger value="camera">Camera Scan</TabsTrigger>
        </TabsList>

        <TabsContent value="device" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Bluetooth className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">Connect ECG Device</h2>
                <p className="text-gray-600 mb-6">
                  Connect your portable ECG device via Bluetooth to capture readings directly.
                </p>

                {!connectedDevice ? (
                  <Button onClick={handleScan} disabled={isScanning} className="w-full">
                    {isScanning ? "Scanning..." : "Scan for Devices"}
                  </Button>
                ) : (
                  <div className="w-full">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg mb-4">
                      <div className="flex items-center gap-3">
                        <Bluetooth className="w-5 h-5 text-green-600" />
                        <span className="font-medium">{connectedDevice}</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-green-600">Connected</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button variant="outline" className="w-full" onClick={handleDisconnect}>
                        Disconnect
                      </Button>
                      <Link href="/demo">
                        <Button className="w-full">Start Capture</Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-700">
            <p className="font-medium mb-1">Compatible Devices:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>CardioScan ECG-100</li>
              <li>HeartTrack Pro</li>
              <li>ECG Monitor Plus</li>
              <li>CardioRhythm Portable</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="camera" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">Scan Paper ECG</h2>
                <p className="text-gray-600 mb-6">
                  Use your camera to scan and digitize paper-based ECG readings for analysis.
                </p>

                <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-gray-400" />
                </div>

                <div className="space-y-3 w-full">
                  <Button className="w-full" onClick={handleCalibrate} disabled={ocrCalibrated}>
                    {ocrCalibrated ? "Camera Calibrated" : "Calibrate Camera"}
                  </Button>
                  <Button variant="outline" className="w-full" disabled={!ocrCalibrated}>
                    Take Photo
                  </Button>
                  <Button variant="outline" className="w-full" disabled={!ocrCalibrated}>
                    Upload from Gallery
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-amber-50 rounded-lg p-4 text-sm text-amber-700">
            <p className="font-medium mb-1">For best results:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Ensure good lighting</li>
              <li>Place ECG paper on a flat surface</li>
              <li>Avoid shadows and glare</li>
              <li>Keep the camera steady</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
