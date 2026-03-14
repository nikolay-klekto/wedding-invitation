import type { CSSProperties } from 'react'

export default function DetailsSection() {
  return (
    <section style={s.section}>
      <h2 style={s.heading}>Детали</h2>

      <div style={s.divider}>
        <span style={s.arrow}>❧</span>
        <span style={s.heartSmall}>♥</span>
        <span style={s.arrow}>❧</span>
      </div>

      <p style={s.text}>
        Ваши улыбки и смех подарят нам незабываемое счастье в этот день,
        а пожелания в конвертах помогут осуществить <strong>НАШИ мечты!</strong>
      </p>

      <div style={s.dividerSimple} />

      <p style={s.text}>
        Приятным комплиментом для нас вместо цветов будет бутылочка вашего
        любимого вина, которую мы откроем на ближайшем совместном празднике.
      </p>
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
  divider: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.25rem',
    color: 'var(--color-pink)',
  },
  arrow: {
    fontSize: '1.1rem',
    color: 'var(--color-pink)',
  },
  heartSmall: {
    fontSize: '0.85rem',
    color: 'var(--color-heart)',
  },
  dividerSimple: {
    width: '60px',
    height: '1px',
    background: 'var(--color-border)',
    margin: '1.25rem auto',
  },
  text: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.95rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.8,
    textAlign: 'center',
  },
}
