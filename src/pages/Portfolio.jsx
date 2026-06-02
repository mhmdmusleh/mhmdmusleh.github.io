import { ExternalLink } from 'lucide-react'

function VideoCard({ title, videoId, href, role }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-gray-900/80 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-gray-900 line-clamp-2">{title}</p>
        {role && <p className="mt-1 text-xs text-gray-500">{role}</p>}
      </div>
    </a>
  )
}

function ReelCard({ title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 rounded p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
            <ExternalLink className="w-3 h-3" />
            Open on Instagram
          </p>
        </div>
      </div>
    </a>
  )
}

const projects = [
  {
    title: 'AppGallery Gamers Cup - PUBG MOBILE',
    description: 'Visual effects and motion graphics using Adobe Photoshop & Premiere Pro for the Happy Friday Survival Stage event in the Middle East.',
    videos: [
      { title: 'AppGallery Gamers Cup Happy Friday Survival Stage X PUBG MOBILE', id: '2bE8ks1lc8o', role: 'VFX · Motion Graphics · Adobe PS/PR' },
    ],
  },
  {
    title: 'Zalzali Family - YouTube Channel',
    description: 'Photography, editing, After Effects, and DaVinci Resolve color grading. Multiple videos reached millions of views, others in the hundreds of thousands.',
    videos: [
      { title: 'باي باي مدرسة هاي هاي صيفية', id: 'XXjw3K4QpMI', role: 'Edit · AE · Color Grading' },
      { title: 'نجوم اليوتيوب ماريا ملك يارا كتاليا الين وتالين نايا', id: 'ktnT-WYfkbw', role: 'Edit · AE · Color Grading' },
      { title: 'أغنية اهلاً يا عيد', id: 'WoAAjK4wGM8', role: 'Edit · AE · Color Grading' },
      { title: 'كليب رمضان جانا 🌙', id: 'cPZovn7kL5Q', role: 'Edit · AE · Color Grading' },
      { title: 'كليب نجوم اليوتيوب', id: '-CIIqqJgRFU', role: 'Edit · AE · Color Grading' },
      { title: 'كليب يا شرطة حرامي عالباب', id: 'zpmEbFaCwjM', role: 'Edit · AE · Color Grading' },
      { title: 'سني واوا', id: '3kr07QRXGqc', role: 'Edit · AE · Color Grading' },
    ],
  },
  {
    title: 'Aline & Taline Sleiman',
    description: 'Full music video production - filming, editing, and post-production. Official music video release.',
    videos: [
      { title: 'أغنية الين وتالين - أختي (Official Music Video)', id: 'YfbVIK_x27Q', role: 'Filming · Edit · Post-Production' },
    ],
  },
  {
    title: 'Yara Hamadi',
    description: 'Full music video production - filming, editing, and post-production. Official music video release 2025.',
    videos: [
      { title: 'يارا غنّولي يلا غنّولي | Ghanouli yalla Ghanouli', id: 'AFlcYDqfHVM', role: 'Filming · Edit · Post-Production' },
    ],
  },
]

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
        <p className="mt-2 text-gray-600">A selection of video editing and VFX work.</p>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <section key={project.title}>
            <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
            <p className="mt-1 text-sm text-gray-500 mb-6">{project.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.videos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  videoId={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  role={video.role}
                />
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Instagram - maria_and_cataleya</h2>
          <p className="mt-1 text-sm text-gray-500 mb-6">Reel production and editing for influencer advertising content.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReelCard
              title="Advertising Reel"
              href="https://www.instagram.com/reels/DS-CLFkiuNA/"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
