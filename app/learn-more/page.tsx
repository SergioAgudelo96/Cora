import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Activity, FileText, Heart, Shield, Stethoscope } from "lucide-react"

export default function LearnMorePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Link href="/onboarding" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">About CorApp</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <section className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <Activity className="w-8 h-8 text-red-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-2">Advanced ECG Analysis</h2>
          <p className="text-gray-600 text-center mb-6">
            CorApp is a cutting-edge mobile application designed for healthcare professionals to analyze and interpret
            electrocardiograms with precision and ease.
          </p>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Medical-Grade Analysis</h3>
                    <p className="text-sm text-gray-600">
                      Our algorithms are trained with established medical literature and clinical guidelines from the
                      American Heart Association and European Society of Cardiology.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Clinical Decision Support</h3>
                    <p className="text-sm text-gray-600">
                      CorApp provides probability analysis for different cardiac conditions, supporting physicians in
                      the diagnostic process with evidence-based insights.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Comprehensive Reporting</h3>
                    <p className="text-sm text-gray-600">
                      Generate detailed PDF reports with ECG interpretation, probability analysis, and suggested
                      clinical references that can be easily shared with colleagues.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Privacy & Security</h3>
                    <p className="text-sm text-gray-600">
                      CorApp prioritizes patient data security with end-to-end encryption and compliance with healthcare
                      privacy regulations including HIPAA.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Key Features</h2>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                <span className="text-xs text-red-600">•</span>
              </div>
              <span>Integration with portable ECG devices via Bluetooth</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                <span className="text-xs text-red-600">•</span>
              </div>
              <span>OCR technology for scanning paper-based ECGs</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                <span className="text-xs text-red-600">•</span>
              </div>
              <span>Detection of abnormal rhythms and wave irregularities</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                <span className="text-xs text-red-600">•</span>
              </div>
              <span>Probability analysis of clinical conditions</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                <span className="text-xs text-red-600">•</span>
              </div>
              <span>Automatic PDF report generation</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                <span className="text-xs text-red-600">•</span>
              </div>
              <span>Historical ECG comparison and longitudinal monitoring</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                <span className="text-xs text-red-600">•</span>
              </div>
              <span>Integration with electronic health record (EHR) systems</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Medical References</h2>
          <p className="text-gray-600 mb-4">
            CorApp's analysis algorithms are based on established medical literature and clinical guidelines:
          </p>

          <div className="space-y-3">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">American Heart Association (AHA)</h3>
                <p className="text-sm text-gray-600">Guidelines for ECG interpretation and cardiac diagnostics</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">European Society of Cardiology (ESC)</h3>
                <p className="text-sm text-gray-600">Clinical protocols for cardiac arrhythmias and conditions</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Dubin's Rapid Interpretation of EKG's</h3>
                <p className="text-sm text-gray-600">Training base for rhythm interpretation and analysis</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Electrocardiography in Emergency Medicine</h3>
                <p className="text-sm text-gray-600">Protocols for identification of critical cardiac pathologies</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="flex justify-center">
          <Link href="/onboarding">
            <Button size="lg">Return to Setup</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
