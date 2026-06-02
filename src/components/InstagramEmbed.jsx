import { useEffect, useRef, useState } from 'react'

export default function InstagramEmbed({ postUrl, caption }) {
  const containerRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Hide placeholder after Instagram script renders
    const timer = setTimeout(() => setLoaded(true), 4000)

    if (!window.instgrm) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.onload = () => {
        if (window.instgrm) window.instgrm.Embeds.process()
      }
      document.body.appendChild(script)
    } else {
      window.instgrm.Embeds.process()
    }

    return () => clearTimeout(timer)
  }, [postUrl])

  return (
    <div ref={containerRef} className="w-full bg-gray-50 rounded overflow-hidden relative min-h-[200px]">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
          Loading Instagram post...
        </div>
      )}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          margin: '1px auto',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: 'calc(100% - 2px)',
        }}
      >
        <a href={postUrl} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
        {caption && <p>{caption}</p>}
      </blockquote>
    </div>
  )
}
