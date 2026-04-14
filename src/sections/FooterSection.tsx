import type { CSSProperties } from 'react'

export default function FooterSection() {
  return (
    <section style={s.section}>
      <h2 style={s.names}>Коля & Наташа</h2>
      <p style={s.date}>07 · июня · 2026</p>

      <div style={s.hearts}>
        <span style={s.heart}>♥</span>
      </div>

      <p style={s.quote}>«Спасибо, что будете рядом»</p>
    </section>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
    padding: '3rem 1.5rem 1rem',
    maxWidth: '480px',
    width: '100%',
    background: 'var(--color-bg)',
    borderTop: '1px solid var(--color-border)',
  },
  names: {
    fontFamily: 'var(--font-script)',
    fontSize: '2.4rem',
    fontWeight: 600,
    color: 'var(--color-text)',
    marginBottom: '0.4rem',
  },
  date: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.9rem',
    color: 'var(--color-text-light)',
    letterSpacing: '0.05em',
    marginBottom: '1.5rem',
  },
  hearts: {
    marginBottom: '1.25rem',
  },
  heart: {
    fontSize: '1.5rem',
    color: 'var(--color-heart)',
  },
  quote: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontSize: '0.95rem',
    color: 'var(--color-text-light)',
    marginBottom: '2.5rem',
  },
  brand: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem',
    color: 'var(--color-border)',
    letterSpacing: '0.05em',
  },
}
