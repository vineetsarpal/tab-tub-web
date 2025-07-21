import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Chrome, Download, Github, ExternalLink } from "lucide-react"

export function Installation() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get Started in Seconds</h2>
          <p className="mt-4 text-lg text-gray-300">Install TabTub and start organizing your tabs right away.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Chrome className="w-8 h-8 text-blue-400" />
                <div>
                  <CardTitle className="text-white">Chrome Web Store</CardTitle>
                  <CardDescription className="text-gray-300">Official release - Recommended</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">
                  Auto-updates
                </Badge>
                <Badge variant="secondary" className="bg-cyan-600/20 text-cyan-400 border-cyan-600/30">
                  Verified
                </Badge>
              </div>
              <p className="text-gray-300 text-sm">
                Get the latest stable version with automatic updates.
              </p>
              <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                <a href="https://chrome.google.com/webstore/search/tabtub" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Install from Chrome Store
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Github className="w-8 h-8 text-gray-400" />
                <div>
                  <CardTitle className="text-white">GitHub Release</CardTitle>
                  <CardDescription className="text-gray-300">Latest development build</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-teal-600/20 text-teal-400 border-teal-600/30">
                  Open Source
                </Badge>
                <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                  Beta Features
                </Badge>
              </div>
              <p className="text-gray-300 text-sm">
                Download the latest version directly from GitHub.
              </p>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a href="https://github.com/vineetsarpal/tab-tub/releases" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Download from GitHub
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              </Button>
              </Button>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4">Manual Installation</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                1
              </span>
              <span>Download the extension files from GitHub</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                2
              </span>
              <span>Open Chrome and navigate to chrome://extensions/</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                3
              </span>
              <span>Enable "Developer mode" in the top right</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                4
              </span>
              <span>Click "Load unpacked" and select the TabTub folder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
