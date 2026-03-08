import type { CSSProperties } from 'react'

export default function DetailsSection() {
  return (
    <section style={styles.section}>
      <p style={styles.label}>важные детали</p>
      <h2 style={styles.heading}>Подарки</h2>
      <div style={styles.card}>
        <p style={styles.emoji}>🤍</p>
        <p style={styles.text}>
          Самый дорогой подарок для нас — ваше присутствие и тёплые слова.
        </p>
        <p style={styles.text}>
          Если вы хотите сделать нам подарок — мы будем рады вкладу в наш
          «конверт для мечты» — на путешествие в медовый месяц.
        </p>
        <div style={styles.infoBox}>
          <p style={styles.infoLabel}>Реквизиты уточните у организатора</p>
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
    fontSize: '1.8rem',
    fontWeight: 400,
    color: '#4a3728',
    marginBottom: '1.5rem',
  },
  card: {
    background: '#fff',
    border: '1px solid #e8d8cc',
    borderRadius: '16px',
    padding: '1.5rem',
  },
  emoji: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#7a5c4f',
    lineHeight: 1.7,
    marginBottom: '0.75rem',
  },
  infoBox: {
    marginTop: '1rem',
    padding: '0.75rem',
    background: '#f0d6d0',
    borderRadius: '10px',
  },
  infoLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    color: '#7a5c4f',
    fontStyle: 'italic',
  },
}
