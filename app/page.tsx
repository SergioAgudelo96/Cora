import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Activity, ArrowRight, CheckCircle, FileText, Shield } from "lucide-react"

export default function EntrancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-50 to-white">
        <div className="container px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
              <Activity className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CorApp</h1>
            <p className="text-xl md:text-2xl font-medium text-red-600 mb-6">
              Professional ECG Analysis for Healthcare Providers
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Advanced electrocardiogram analysis and interpretation at your fingertips. Capture, analyze, and get
              instant diagnostic insights backed by medical literature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Sign Up
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Designed for Medical Professionals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Analysis</h3>
              <p className="text-gray-600">
                AI-powered ECG interpretation with probability analysis for different cardiac conditions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Reports</h3>
              <p className="text-gray-600">
                Generate detailed PDF reports with interpretation, measurements, and clinical references.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Compliant</h3>
              <p className="text-gray-600">
                HIPAA-compliant platform with end-to-end encryption for patient data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <span className="font-bold text-red-600">1</span>
              </div>
              <h3 className="font-bold mb-2">Capture ECG</h3>
              <p className="text-sm text-gray-600">
                Connect via Bluetooth or scan paper ECGs using your device's camera.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <span className="font-bold text-red-600">2</span>
              </div>
              <h3 className="font-bold mb-2">Analyze</h3>
              <p className="text-sm text-gray-600">
                Our algorithms analyze the ECG data and identify potential abnormalities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <span className="font-bold text-red-600">3</span>
              </div>
              <h3 className="font-bold mb-2">Review Results</h3>
              <p className="text-sm text-gray-600">
                Review probability analysis and key measurements with clinical references.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <span className="font-bold text-red-600">4</span>
              </div>
              <h3 className="font-bold mb-2">Generate Reports</h3>
              <p className="text-sm text-gray-600">
                Create and share professional PDF reports with colleagues and patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Healthcare Professionals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-600">DR</span>
                </div>
                <div>
                  <p className="font-bold">Dr. Rebecca Chen</p>
                  <p className="text-sm text-gray-600">Cardiologist</p>
                </div>
              </div>
              <p className="text-gray-600">
                "CorApp has transformed how I analyze ECGs in my practice. The ability to quickly scan paper ECGs and
                get instant analysis has saved me countless hours."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-green-600">JM</span>
                </div>
                <div>
                  <p className="font-bold">Dr. James Miller</p>
                  <p className="text-sm text-gray-600">Emergency Medicine</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The probability analysis feature has been invaluable in the ER. It helps us quickly prioritize cases
                and make more informed decisions under pressure."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-50">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your ECG Analysis?</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of healthcare professionals who trust CorApp for accurate, efficient ECG interpretation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Create Your Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-bold text-white">CorApp</h3>
              </div>
              <p className="text-sm max-w-xs">Advanced ECG analysis and interpretation for healthcare professionals.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-white">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/learn-more" className="hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-more" className="hover:text-white">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-more" className="hover:text-white">
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/learn-more" className="hover:text-white">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-more" className="hover:text-white">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-more" className="hover:text-white">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/learn-more" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-more" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-more" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} CorApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
