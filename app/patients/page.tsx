import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ChevronRight, Plus, Search, User } from "lucide-react"

export default function PatientsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">Patient History</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search patients..." className="pl-9" />
          </div>
          <Button size="icon" variant="outline">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Recent Patients</h2>
            <Button variant="ghost" size="sm" className="text-sm">
              View All
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Link href="/patients/1" className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500">ID: P-2023-001 • 58 years</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>

              <div className="border-t"></div>

              <Link href="/patients/2" className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">ID: P-2023-002 • 64 years</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>

              <div className="border-t"></div>

              <Link href="/patients/3" className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Michael Brown</p>
                    <p className="text-sm text-gray-500">ID: P-2023-003 • 72 years</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4 mt-8">
          <h2 className="text-lg font-bold">ECG History</h2>

          <Card>
            <CardContent className="p-0">
              <Link href="/demo" className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">John Doe - Atrial Fibrillation</p>
                    <p className="text-sm text-gray-500">May 13, 2025 • 10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full mr-2">Alert</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>

              <div className="border-t"></div>

              <Link href="/demo" className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson - Sinus Tachycardia</p>
                    <p className="text-sm text-gray-500">May 12, 2025 • 2:15 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full mr-2">
                    Caution
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>

              <div className="border-t"></div>

              <Link href="/demo" className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Michael Brown - Normal Sinus Rhythm</p>
                    <p className="text-sm text-gray-500">May 10, 2025 • 9:45 AM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full mr-2">
                    Normal
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
