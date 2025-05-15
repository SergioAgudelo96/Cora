"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Bluetooth, Camera, Bell, HardDrive, Check } from "lucide-react"

interface PermissionsScreenProps {
  onNext: () => void
  onBack: () => void
}

export default function PermissionsScreen({ onNext, onBack }: PermissionsScreenProps) {
  const [permissions, setPermissions] = useState({
    bluetooth: false,
    camera: false,
    storage: false,
    notifications: false,
  })

  const handlePermission = (key: keyof typeof permissions) => {
    setPermissions({
      ...permissions,
      [key]: true,
    })
  }

  const allPermissionsGranted = Object.values(permissions).every(Boolean)

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl font-bold mb-2">App Permissions</h1>
      <p className="text-gray-600 mb-6">
        CorApp needs the following permissions to provide you with the best experience. Each permission is essential for
        specific functionality.
      </p>

      <div className="space-y-4 mb-8">
        <Card className={permissions.bluetooth ? "border-green-500" : ""}>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Bluetooth className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Bluetooth Access</h3>
                  {permissions.bluetooth && <Check className="w-5 h-5 text-green-500" />}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Required to connect with portable ECG devices for real-time data capture.
                </p>
                {!permissions.bluetooth && (
                  <Button size="sm" variant="outline" className="mt-2" onClick={() => handlePermission("bluetooth")}>
                    Grant Access
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={permissions.camera ? "border-green-500" : ""}>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Camera className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Camera Access</h3>
                  {permissions.camera && <Check className="w-5 h-5 text-green-500" />}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Needed to scan paper-based ECGs using optical character recognition (OCR).
                </p>
                {!permissions.camera && (
                  <Button size="sm" variant="outline" className="mt-2" onClick={() => handlePermission("camera")}>
                    Grant Access
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={permissions.storage ? "border-green-500" : ""}>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <HardDrive className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Storage Access</h3>
                  {permissions.storage && <Check className="w-5 h-5 text-green-500" />}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Required to save historical ECG data and generated PDF reports.
                </p>
                {!permissions.storage && (
                  <Button size="sm" variant="outline" className="mt-2" onClick={() => handlePermission("storage")}>
                    Grant Access
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={permissions.notifications ? "border-green-500" : ""}>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Notification Access</h3>
                  {permissions.notifications && <Check className="w-5 h-5 text-green-500" />}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  For critical condition alerts and report generation confirmations.
                </p>
                {!permissions.notifications && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-2"
                    onClick={() => handlePermission("notifications")}
                  >
                    Grant Access
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-3 mt-auto">
        <Button variant="outline" onClick={onBack} className="flex-1">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={onNext} disabled={!allPermissionsGranted} className="flex-1">
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
