import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" className="text-white hover:bg-white/10 mb-4" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: July 25, 2025</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Data Collection and Use</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  TabTub is designed with your privacy in mind. We do not collect, store, or transmit any personal data to external servers. All data processed by TabTub, specifically your saved tab URLs and titles, is:
                </p>
                
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li><strong className="text-white">Stored Locally:</strong> Primarily within your browser&apos;s local storage.</li>
                  <li><strong className="text-white">Synchronized via Chrome&apos;s Built-in Sync:</strong> For users who are signed into Chrome, your saved tabs are synchronized across your devices using chrome.storage.sync. This synchronization is handled entirely by Google&apos;s infrastructure, and TabTub does not have direct access to or control over this sync process, or the data on Google&apos;s servers.</li>
                </ul>

                <div className="bg-teal-900/20 border border-teal-600/30 rounded-lg p-4">
                  <p className="text-teal-200 font-medium">
                    We do not use cookies, track your browsing history, or collect any analytics data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information Sharing and Disclosure</h2>
              <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                <p className="text-red-200 font-medium">
                  TabTub does not share, sell, or disclose any of your information with third parties. As no data is collected by us, there is no data to share.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Since TabTub does not transmit user data to external servers, the security of your data relies on the security of your Chrome browser and your Google account (for synced data). We encourage users to maintain strong passwords and enable two-factor authentication for their Google accounts.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
