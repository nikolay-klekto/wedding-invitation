import type { CSSProperties } from 'react'

const events = [
  { time: '13:00', title: 'Welcome' },
  { time: '13:30', title: 'Торжественная\nцеремония' },
  { time: '14:30', title: 'Начало банкета' },
  { time: '22:00', title: 'Окончание вечера' },
]

export default function TimelineSection() {
  return (
    <section style={s.section}>
      <h2 style={s.heading}>Программа дня</h2>

      <div style={s.list}>
        {events.map((ev, i) => {
          const isLeft = i % 2 === 0
          return (
            <div key={i} style={{ ...s.item, ...(isLeft ? s.itemLeft : s.itemRight) }}>
              <div style={s.bubble}>
                <p style={s.time}>{ev.time}</p>
                <p style={s.title}>{ev.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
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
    marginBottom: '2rem',
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    position: 'relative',
  },
  item: {
    display: 'flex',
    width: '60%',
  },
  itemLeft: {
    alignSelf: 'flex-start',
    marginLeft: '0',
  },
  itemRight: {
    alignSelf: 'flex-end',
    marginRight: '0',
  },
  bubble: {
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: '12px',
    padding: '0.85rem 1.1rem',
    width: '100%',
  },
  time: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.05rem',
    fontWeight: 600,
    color: 'var(--color-text)',
    marginBottom: '0.25rem',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.9rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.4,
    whiteSpace: 'pre-line',
  },
}
