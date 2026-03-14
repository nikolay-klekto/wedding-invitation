import type { CSSProperties } from 'react'

// Date slider showing days around the wedding date (like in the example)
const WEDDING_DAY = 7 // June 7
const MONTH = 'июня'

const days = [5, 6, 7, 8, 9]

export default function DateSection() {
  return (
    <section style={s.section}>
      <p style={s.label}>наш день</p>

      <div style={s.slider}>
        {days.map((d) => {
          const active = d === WEDDING_DAY
          return (
            <div key={d} style={{ ...s.dayItem, ...(active ? s.dayActive : {}) }}>
              <span style={{ ...s.dayNum, ...(active ? s.dayNumActive : {}) }}>
                {String(d).padStart(2, '0')}
              </span>
            </div>
          )
        })}
      </div>

      <p style={s.month}>{MONTH}</p>

      <p style={s.fullDate}>Воскресенье, 07 июня 2026</p>
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
    borderBottom: '1px solid var(--color-border)',
  },
  label: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.85rem',
    color: 'var(--color-text-light)',
    marginBottom: '1rem',
    letterSpacing: '0.05em',
  },
  slider: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
  },
  dayItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1.5px solid transparent',
  },
  dayActive: {
    border: '1.5px solid var(--color-bordeaux)',
    background: 'var(--color-bordeaux-light)',
  },
  dayNum: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.15rem',
    color: 'var(--color-text-light)',
    fontWeight: 400,
  },
  dayNumActive: {
    color: 'var(--color-bordeaux)',
    fontWeight: 600,
  },
  month: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.9rem',
    color: 'var(--color-text-muted)',
    marginBottom: '1.5rem',
    letterSpacing: '0.05em',
  },
  fullDate: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.8rem',
    color: 'var(--color-text-light)',
    letterSpacing: '0.03em',
  },
}
