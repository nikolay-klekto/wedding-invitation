import type { CSSProperties } from 'react'

const events = [
  { time: '12:00', title: 'Сбор гостей', desc: 'Встреча и приветственный бокал' },
  { time: '13:00', title: 'Церемония', desc: 'Торжественная регистрация брака' },
  { time: '14:00', title: 'Фотосессия', desc: 'Прогулка по территории усадьбы' },
  { time: '15:00', title: 'Банкет', desc: 'Праздничный ужин и танцы' },
  { time: '18:00', title: 'Торт', desc: 'Разрезание свадебного торта' },
  { time: '23:00', title: 'Завершение', desc: 'Финальный танец и салют' },
]

export default function TimelineSection() {
  return (
    <section style={styles.section}>
      <p style={styles.label}>как пройдёт день</p>
      <h2 style={styles.heading}>Программа</h2>
      <div style={styles.list}>
        {events.map((e, i) => (
          <div key={i} style={styles.item}>
            <div style={styles.timeCol}>
              <span style={styles.time}>{e.time}</span>
            </div>
            <div style={styles.dot} />
            <div style={styles.textCol}>
              <p style={styles.title}>{e.title}</p>
              <p style={styles.desc}>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles: Record<string, CSSProperties> = {
  section: {
    padding: '3rem 1.5rem',
    maxWidth: '480px',
    width: '100%',
    background: '#fff9f6',
  },
  label: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.8rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#9b7e6e',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.8rem',
    fontWeight: 400,
    color: '#4a3728',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    paddingBottom: '1.5rem',
  },
  timeCol: {
    minWidth: '52px',
    textAlign: 'right',
    paddingTop: '2px',
  },
  time: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    color: '#c9a882',
    fontWeight: 600,
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#c9a882',
    border: '2px solid #f0d6d0',
    flexShrink: 0,
    marginTop: '4px',
  },
  textCol: {
    flex: 1,
  },
  title: {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: '0.95rem',
    color: '#4a3728',
    marginBottom: '0.2rem',
  },
  desc: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    color: '#9b7e6e',
    lineHeight: 1.5,
  },
}
