import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FolderOpen, Move, Trash2, RotateCcw, RefreshCw } from "lucide-react"

const features = [
  {
    icon: Download,
    title: "Save Current Tab",
    description: "Quickly save the active tab to your tub with a single click.",
  },
  {
    icon: FolderOpen,
    title: "Save All Tabs",
    description: "Effortlessly save all open tabs in your current window.",
  },
  {
    icon: Move,
    title: "Reorder and Organize",
    description: "Drag and drop to easily reorder and manage your saved tabs.",
  },
  {
    icon: Trash2,
    title: "Delete Individual Tabs",
    description: "Remove tabs from your tub one by one as needed.",
  },
  {
    icon: RotateCcw,
    title: "Empty Your Tub",
    description: "Clear all saved tabs from your tub with a confirmation.",
  },
  {
    icon: RefreshCw,
    title: "Synced Across Devices",
    description: "Your saved tabs are automatically synced across all your Chrome browsers.",
  },
]

export function Features() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Powerful Features for Tab Management
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to take control of your browser tabs and boost your productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
