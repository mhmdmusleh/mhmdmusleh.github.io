import { Camera, Clapperboard, Monitor, Box } from 'lucide-react'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          📸 Capturing moments | 🎬 Crafting stories
        </p>
        <p className="text-gray-600 mb-8">
          💻 Editing wizard (PS · AE · PR · Resolve)
        </p>
        <p className="text-gray-600 mb-8">
          🌀 3D visuals in Blender
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-start gap-4 p-4 border border-gray-200 rounded">
          <Camera className="h-6 w-6 text-gray-900 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900">Photography</h3>
            <p className="text-sm text-gray-500 mt-1">Portrait, landscape, and event photography across Lebanon.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 border border-gray-200 rounded">
          <Clapperboard className="h-6 w-6 text-gray-900 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900">Videography</h3>
            <p className="text-sm text-gray-500 mt-1">Short films, event coverage, and promotional videos.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 border border-gray-200 rounded">
          <Monitor className="h-6 w-6 text-gray-900 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900">Post-Production</h3>
            <p className="text-sm text-gray-500 mt-1">Professional editing, color grading, and motion graphics.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 border border-gray-200 rounded">
          <Box className="h-6 w-6 text-gray-900 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900">3D Visuals</h3>
            <p className="text-sm text-gray-500 mt-1">Blender-based 3D renders and visual effects.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
