import { ImageResponse } from 'next/server'

export const runtime = 'edge'
export const alt = 'Ayobami Tunwase — Frontend Web Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#09090b',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Accent orb */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
          }}
        />

        <p style={{ color: '#818cf8', fontSize: 18, letterSpacing: '0.15em', margin: '0 0 20px', textTransform: 'uppercase' }}>
          Hi, my name is
        </p>

        <h1 style={{ color: '#f4f4f5', fontSize: 80, fontWeight: 700, margin: '0 0 16px', lineHeight: 1.05 }}>
          Ayobami Tunwase.
        </h1>

        <h2 style={{ color: '#71717a', fontSize: 48, fontWeight: 700, margin: '0 0 40px', lineHeight: 1.1 }}>
          I build things for the web.
        </h2>

        <p style={{ color: '#a1a1aa', fontSize: 22, margin: 0 }}>
          ayobami-tunwase.vercel.app
        </p>
      </div>
    ),
    { ...size }
  )
}
