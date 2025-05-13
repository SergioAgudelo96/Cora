"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Activity, ArrowLeft, Bluetooth, Camera, Smartphone } from "lucide-react"

export default function CapturePage() {
  const [isScanning, setIsScanning] = useState(false)
  const [connectedDevice, setConnectedDevice] = useState<string | null>(null)

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

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">Capture ECG</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <Tabs defaultValue="device" className="w-full">
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
                        <span className="text-sm text-green-600">Connected</span>
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
                    <Button className="w-full">Take Photo</Button>
                    <Button variant="outline" className="w-full">
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
      </main>

      <footer className="sticky bottom-0 border-t bg-white">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex flex-col items-center text-gray-500">
            <Smartphone className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>

          <Link href="/capture" className="flex flex-col items-center text-red-500">
            <Activity className="w-6 h-6" />
            <span className="text-xs">Capture</span>
          </Link>

          <Link href="/patients" className="flex flex-col items-center text-gray-500">
            <Activity className="w-6 h-6" />
            <span className="text-xs">Patients</span>
          </Link>

          <Link href="/analysis" className="flex flex-col items-center text-gray-500">
            <Activity className="w-6 h-6" />
            <span className="text-xs">Reports</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}
