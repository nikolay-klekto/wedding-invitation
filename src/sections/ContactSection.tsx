import type { CSSProperties } from 'react'

export default function ContactSection() {
  return (
    <section style={s.section}>
      <p style={s.pretext}>
        В случае возникновения вопросов обращайтесь к нашему свадебному
        организатору Дарье
      </p>

      <a
        href="https://t.me/username"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline"
        style={s.btn}
      >
        связаться
      </a>
    </section>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
    padding: '2.5rem 1.5rem',
    maxWidth: '480px',
    width: '100%',
    background: 'var(--color-bg)',
    borderTop: '1px solid var(--color-border)',
  },
  pretext: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.95rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.7,
    marginBottom: '1.25rem',
    maxWidth: '300px',
    margin: '0 auto 1.25rem',
  },
  btn: {
    display: 'inline-block',
  },
}
