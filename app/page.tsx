import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Installation } from "@/components/installation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <Hero />
      <Features />
      <Installation />
      <Footer />
    </main>
  )
}
