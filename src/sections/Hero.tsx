import type { CSSProperties } from 'react'

export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.photos}>
        <div style={styles.photoPlaceholder}>📷 Фото Коли</div>
        <div style={styles.photoPlaceholder}>📷 Фото Наташи</div>
      </div>
      <p style={styles.label}>мы создаём семью</p>
      <h1 style={styles.names}>Коля &amp; Наташа</h1>
      <p style={styles.date}>07 июня 2026</p>
    </section>
  )
}

const styles: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
    paddingTop: '4rem',
    paddingBottom: '3rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    background: 'linear-gradient(180deg, #fff5f0 0%, #fdf8f4 100%)',
    width: '100%',
    maxWidth: '480px',
  },
  photos: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  photoPlaceholder: {
    width: '130px',
    height: '160px',
    background: '#f0d6d0',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    color: '#9b7e6e',
    fontFamily: 'var(--font-body)',
  },
  label: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#9b7e6e',
    marginBottom: '0.5rem',
  },
  names: {
    fontFamily: 'var(--font-heading)',
    fontSize: '2.8rem',
    fontWeight: 400,
    color: '#4a3728',
    marginBottom: '0.75rem',
    lineHeight: 1.2,
  },
  date: {
    fontFamily: 'var(--font-body)',
    fontSize: '1.1rem',
    color: '#c9a882',
    letterSpacing: '0.05em',
  },
}
