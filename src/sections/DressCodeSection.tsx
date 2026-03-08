import type { CSSProperties } from 'react'

const palette = [
  { color: '#f0d6d0', label: 'Пыльная роза' },
  { color: '#c9a882', label: 'Золото' },
  { color: '#e8d8cc', label: 'Бежевый' },
  { color: '#d4bfb0', label: 'Тауп' },
  { color: '#4a3728', label: 'Шоколад' },
]

export default function DressCodeSection() {
  return (
    <section style={styles.section}>
      <p style={styles.label}>как одеться</p>
      <h2 style={styles.heading}>Дресс-код</h2>
      <p style={styles.text}>
        Мы будем рады, если ваши наряды впишутся в тёплую пастельную гамму праздника.
        Пожалуйста, избегайте белого и чёрного цвета.
      </p>
      <div style={styles.palette}>
        {palette.map((p) => (
          <div key={p.label} style={styles.swatchWrap}>
            <div style={{ ...styles.swatch, background: p.color }} />
            <span style={styles.swatchLabel}>{p.label}</span>
          </div>
        ))}
      </div>
      <div style={styles.tips}>
        <div style={styles.tip}>
          <span style={styles.tipIcon}>👗</span>
          <p style={styles.tipText}>Коктейльное или вечернее платье для дам</p>
        </div>
        <div style={styles.tip}>
          <span style={styles.tipIcon}>🤵</span>
          <p style={styles.tipText}>Костюм или смокинг для кавалеров</p>
        </div>
        <div style={styles.tip}>
          <span style={styles.tipIcon}>👠</span>
          <p style={styles.tipText}>Учтите, что часть праздника на улице</p>
        </div>
      </div>
    </section>
  )
}

const styles: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
    padding: '3rem 1.5rem',
    maxWidth: '480px',
    width: '100%',
  },
  label: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.8rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#9b7e6e',
    marginBottom: '0.5rem',
  },
  heading: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.8rem',
    fontWeight: 400,
    color: '#4a3728',
    marginBottom: '1rem',
  },
  text: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#7a5c4f',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
  },
  palette: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  swatchWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.4rem',
  },
  swatch: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid #e8d8cc',
  },
  swatchLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.7rem',
    color: '#9b7e6e',
  },
  tips: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    textAlign: 'left',
  },
  tip: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    background: '#fff9f6',
    border: '1px solid #e8d8cc',
    borderRadius: '12px',
    padding: '0.75rem 1rem',
  },
  tipIcon: {
    fontSize: '1.2rem',
    flexShrink: 0,
  },
  tipText: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    color: '#7a5c4f',
    lineHeight: 1.5,
  },
}
