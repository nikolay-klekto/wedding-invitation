import type { CSSProperties } from 'react'

export default function DateSection() {
  return (
    <section style={styles.section}>
      <p style={styles.label}>запомните эту дату</p>
      <h2 style={styles.heading}>07 июня 2026</h2>
      <div style={styles.grid}>
        <div style={styles.cell}>
          <span style={styles.number}>07</span>
          <span style={styles.unit}>день</span>
        </div>
        <div style={styles.cell}>
          <span style={styles.number}>06</span>
          <span style={styles.unit}>месяц</span>
        </div>
        <div style={styles.cell}>
          <span style={styles.number}>2026</span>
          <span style={styles.unit}>год</span>
        </div>
      </div>
      <p style={styles.caption}>Воскресенье</p>
    </section>
  )
}

const styles: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
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
  },
  heading: {
    fontFamily: 'var(--font-heading)',
    fontSize: '2rem',
    fontWeight: 400,
    color: '#4a3728',
    marginBottom: '2rem',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#fff',
    border: '1px solid #e8d8cc',
    borderRadius: '12px',
    padding: '1rem 1.2rem',
    minWidth: '72px',
  },
  number: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.8rem',
    color: '#c9a882',
    lineHeight: 1,
    marginBottom: '0.3rem',
  },
  unit: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.75rem',
    color: '#9b7e6e',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  caption: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    color: '#9b7e6e',
    fontStyle: 'italic',
  },
}
