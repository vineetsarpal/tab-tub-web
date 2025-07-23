import { Button } from "@/components/ui/button"
import { Download, Star } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      {/* Background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Image src="/tabtub-logo.png" alt="TabTub Logo" width={120} height={120} className="drop-shadow-2xl" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Organize Your Tabs with{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">TabTub</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
          The ultimate Chrome extension for tab management. Group, organize, and navigate your browser tabs with ease.
          Boost your productivity and keep your workspace clean.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
            asChild
          >
            <a href="https://chromewebstore.google.com/detail/tabtub/fimniebpmaiaoinmlnfigaeommdnhkpj" target="_blank" rel="noopener noreferrer">
              <Download className="w-5 h-5 mr-2" />
              Install Extension
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            asChild
          >
            <a href="https://github.com/vineetsarpal/tab-tub" target="_blank" rel="noopener noreferrer">
              <Star className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-x-8 text-sm text-gray-400">
          <div className="flex items-center gap-x-2">
            <div className="w-2 h-2 bg-[#ef4444] rounded-full flex-shrink-0" /> 
            Privacy Focused
          </div>
          <div className="flex items-center gap-x-2">
            <div className="w-2 h-2 bg-[#22c55e] rounded-full flex-shrink-0" />
            Free & Open Source
          </div>
          <div className="flex items-center gap-x-2">
            <div className="w-2 h-2 bg-[#facc15] rounded-full flex-shrink-0" />
            Lightweight
          </div>
        </div>
      </div>
    </section>
  )
}
