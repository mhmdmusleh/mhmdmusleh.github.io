import InstagramEmbed from '../components/InstagramEmbed'

const posts = [
  { id: 1, url: 'https://www.instagram.com/p/DOWwstrDaW5/' },
  { id: 2, url: 'https://www.instagram.com/p/DOWwrVNjTP_/' },
  { id: 3, url: 'https://www.instagram.com/p/DOWwqJODUca/' },
  { id: 4, url: 'https://www.instagram.com/reel/DYSJnBitH0c/' },
  { id: 5, url: 'https://www.instagram.com/reel/DYNXBFKOEj2/' },
  { id: 6, url: 'https://www.instagram.com/reel/DYL8SKStlhD/' },
  { id: 7, url: 'https://www.instagram.com/reel/DYCtQuOAyHZ/' },
  { id: 8, url: 'https://www.instagram.com/reel/DYAFCn6gqly/' },
  { id: 9, url: 'https://www.instagram.com/reel/DX_2pRIgUGv/' },
]

export default function Gallery() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
        <p className="mt-2 text-gray-600">A selection of recent work from Instagram.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id}>
            <InstagramEmbed postUrl={post.url} />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">Want to see more?</p>
        <a
          href="https://www.instagram.com/musleh.media/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
        >
          Follow @musleh.media on Instagram
        </a>
      </div>
    </div>
  )
}
