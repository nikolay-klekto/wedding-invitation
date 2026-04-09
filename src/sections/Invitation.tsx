import type { CSSProperties } from 'react'

export default function Invitation() {
  return (
    <section style={s.section}>
      <h2 style={s.heading}>Дорогие наши гости</h2>

      <p style={s.text}>
        Мы приглашаем вас разделить с нами одно из важных событий —
      </p>

      <p style={s.accent}>НАШУ СВАДЬБУ</p>

      <div style={s.heartRow}>
        <span style={s.bow}>🎀</span>
        <span style={s.heartIcon}>❤</span>
        <span style={s.bow}>🎀</span>
      </div>
    </section>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
    padding: '1.5rem 1.5rem 2rem',
    maxWidth: '480px',
    width: '100%',
    background: 'var(--color-bg)',
  },
  heading: {
    fontFamily: 'var(--font-script)',
    fontSize: '2.4rem',
    fontWeight: 600,
    color: 'var(--color-text)',
    lineHeight: 1.2,
    marginBottom: '1.25rem',
  },
  text: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.7,
    marginBottom: '0.75rem',
  },
  accent: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.1rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    color: 'var(--color-bordeaux)',
    marginBottom: '2rem',
  },
  heartRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    fontSize: '1.5rem',
  },
  bow: {
    fontSize: '1.5rem',
  },
  heartIcon: {
    fontSize: '1.25rem',
    color: 'var(--color-heart)',
  },
}
