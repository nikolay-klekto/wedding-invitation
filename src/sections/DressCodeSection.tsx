import type { CSSProperties } from 'react'

// Palette matching the example: dark, grey, light blue, dark navy
const palette = [
  '#2c2c2c',
  '#b0a89a',
  '#a8c5d4',
  '#1e2d40',
]

export default function DressCodeSection() {
  return (
    <section style={s.section}>
      <h2 style={s.heading}>Дресс-код</h2>

      <p style={s.subtitle}>
        Поддержите нас красивыми нарядами в палитре торжества:
      </p>

      <div style={s.palette}>
        {palette.map((color) => (
          <div key={color} style={{ ...s.swatch, background: color }} />
        ))}
      </div>

      {/* Photo grid placeholder */}
      <div style={s.photoGrid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={s.photoItem}>
            <span style={s.photoEmoji}>{i % 2 === 0 ? '👗' : '🤵'}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
    padding: '3rem 1.5rem',
    maxWidth: '480px',
    width: '100%',
    background: 'var(--color-bg)',
    borderTop: '1px solid var(--color-border)',
  },
  heading: {
    fontFamily: 'var(--font-script)',
    fontSize: '2.2rem',
    fontWeight: 600,
    color: 'var(--color-text)',
    marginBottom: '1rem',
  },
  subtitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.95rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    maxWidth: '300px',
    margin: '0 auto 1.5rem',
  },
  palette: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    marginBottom: '1.75rem',
  },
  swatch: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '1px solid var(--color-border)',
  },
  photoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  photoItem: {
    aspectRatio: '1',
    background: 'var(--color-bg-2)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
  },
  photoEmoji: {
    fontSize: '2rem',
  },
}
