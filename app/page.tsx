import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, FileText, History, Home } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-red-500" />
            <h1 className="text-xl font-bold">CorApp</h1>
          </div>
          <Button variant="outline" size="sm">
            Login
          </Button>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to CorApp</h2>
          <p className="text-gray-600 mb-4">
            Advanced ECG analysis and interpretation at your fingertips. Capture, analyze, and get instant diagnostic
            insights.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <Link href="/capture">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-center">Capture ECG</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/patients">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <History className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-medium text-center">Patient History</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/analysis">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-medium text-center">Recent Analysis</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demo">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                    <Activity className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-center">Demo Analysis</h3>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">Recent Activity</h2>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">John Doe - ECG Analysis</p>
                    <p className="text-sm text-gray-500">10 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pb-3 border-b">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Report Generated</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <History className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson - ECG Comparison</p>
                    <p className="text-sm text-gray-500">Yesterday</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="sticky bottom-0 border-t bg-white">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex flex-col items-center text-red-500">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>

          <Link href="/capture" className="flex flex-col items-center text-gray-500">
            <Activity className="w-6 h-6" />
            <span className="text-xs">Capture</span>
          </Link>

          <Link href="/patients" className="flex flex-col items-center text-gray-500">
            <History className="w-6 h-6" />
            <span className="text-xs">Patients</span>
          </Link>

          <Link href="/analysis" className="flex flex-col items-center text-gray-500">
            <FileText className="w-6 h-6" />
            <span className="text-xs">Reports</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}
