import { Heart } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/tabtub-logo.png" alt="TabTub Logo" width={40} height={40} />
              <h3 className="text-2xl font-bold text-white">TabTub</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The ultimate Chrome extension for tab management. Open source, and designed for
              productivity.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://github.com/vineetsarpal/tab-tub/issues/new?template=bug_report.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Report Bug
                </a>
              </li>
              <li>
                <a href="mailto:tech.vinsa@gmail.com" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TabTub. Made with <Heart className="w-4 h-4 inline text-red-400" /> for productivity.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
