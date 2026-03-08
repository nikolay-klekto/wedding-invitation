import type { CSSProperties } from 'react'

export default function FooterSection() {
  return (
    <section style={styles.section}>
      <div style={styles.divider} />
      <p style={styles.emoji}>🌸</p>
      <h2 style={styles.names}>Коля & Наташа</h2>
      <p style={styles.date}>07 · 06 · 2026</p>
      <p style={styles.quote}>
        «Любовь никогда не перестаёт»
      </p>
      <p style={styles.copy}>С любовью и нетерпением ждём вас</p>
    </section>
  )
}

const styles: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
    padding: '3rem 1.5rem 4rem',
    maxWidth: '480px',
    width: '100%',
    background: 'linear-gradient(180deg, #fdf8f4 0%, #fff5f0 100%)',
  },
  divider: {
    width: '60px',
    height: '1px',
    background: '#e8d8cc',
    margin: '0 auto 2rem',
  },
  emoji: {
    fontSize: '2rem',
    marginBottom: '0.75rem',
  },
  names: {
    fontFamily: 'var(--font-heading)',
    fontSize: '2rem',
    fontWeight: 400,
    color: '#4a3728',
    marginBottom: '0.5rem',
  },
  date: {
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: '#c9a882',
    letterSpacing: '0.15em',
    marginBottom: '1.5rem',
  },
  quote: {
    fontFamily: 'var(--font-heading)',
    fontStyle: 'italic',
    fontSize: '1rem',
    color: '#9b7e6e',
    marginBottom: '1.5rem',
  },
  copy: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    color: '#c9a882',
    letterSpacing: '0.05em',
  },
}
