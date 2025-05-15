"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Bluetooth, Camera, Check, Smartphone } from "lucide-react"

interface DeviceSetupScreenProps {
  onNext: () => void
  onBack: () => void
}

export default function DeviceSetupScreen({ onNext, onBack }: DeviceSetupScreenProps) {
  const [activeTab, setActiveTab] = useState("camera")
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
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl font-bold mb-2">Device Setup</h1>
      <p className="text-gray-600 mb-6">
        Connect your ECG device via Bluetooth or set up the camera for paper ECG scanning.
      </p>

      <Tabs defaultValue="camera" value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="bluetooth">Bluetooth Device</TabsTrigger>
          <TabsTrigger value="camera">Camera Setup</TabsTrigger>
        </TabsList>

        <TabsContent value="bluetooth" className="flex flex-col flex-1">
          <Card className="mb-6">
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

                    <Button variant="outline" className="w-full" onClick={handleDisconnect}>
                      Disconnect
                    </Button>
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

        <TabsContent value="camera" className="flex flex-col flex-1">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">OCR Camera Setup</h2>
                <p className="text-gray-600 mb-6">
                  Configure your camera to scan paper-based ECGs with optimal accuracy.
                </p>

                <div className="w-full h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-gray-400" />
                </div>

                <div className="space-y-3 w-full">
                  <Button className="w-full" onClick={handleCalibrate} disabled={ocrCalibrated}>
                    {ocrCalibrated ? "Calibrated Successfully" : "Calibrate Camera"}
                  </Button>
                  {ocrCalibrated && (
                    <div className="flex items-center justify-center text-green-600">
                      <Check className="w-4 h-4 mr-1" />
                      <span className="text-sm">Camera calibrated for optimal ECG scanning</span>
                    </div>
                  )}
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

          <div className="mt-4">
            <Button variant="outline" className="w-full" onClick={() => setActiveTab("video")}>
              <Smartphone className="w-4 h-4 mr-2" />
              Watch Demo Video
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="video" className="flex flex-col flex-1">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-xl font-bold mb-4">How to Scan Paper ECGs</h2>
                <div className="w-full aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <Smartphone className="w-12 h-12 text-gray-400" />
                  <span className="ml-2 text-gray-500">Demo Video</span>
                </div>
                <p className="text-gray-600 mb-4">
                  This video demonstrates the optimal technique for scanning paper-based ECGs using the app's OCR
                  functionality.
                </p>
                <Button variant="outline" className="w-full" onClick={() => setActiveTab("camera")}>
                  Back to Camera Setup
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex gap-3 mt-6">
        <Button variant="outline" onClick={onBack} className="flex-1">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={activeTab === "camera" ? !ocrCalibrated : !connectedDevice}
          className="flex-1"
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
