import type { CSSProperties } from 'react'
import dresscodeImg from '../assets/images/dresscode.jpg'

export default function DressCodeSection() {
  return (
    <section style={s.section}>
      <h2 style={s.heading}>Дресс-код</h2>

      <p style={s.subtitle}>
        Поддержите нас красивыми нарядами в палитре торжества:
      </p>

      <img src={dresscodeImg} alt="Дресс-код" style={s.photo} />
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
  photo: {
    width: '100%',
    display: 'block',
  },
}
