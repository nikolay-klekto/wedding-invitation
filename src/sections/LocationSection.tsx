import type { CSSProperties } from 'react'

const MAP_URL =
  'https://yandex.ru/maps/?text=Дзержинский+район+деревня+Новинка+ул+Центральная+17'

export default function LocationSection() {
  return (
    <section style={styles.section}>
      <p style={styles.label}>где нас найти</p>
      <h2 style={styles.heading}>Место проведения</h2>
      <div style={styles.card}>
        <p style={styles.venue}>Усадьба LaVilla</p>
        <p style={styles.address}>
          Дзержинский район,<br />
          деревня Новинка,<br />
          ул. Центральная, 17
        </p>
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Открыть на карте
        </a>
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
    marginBottom: '1.5rem',
  },
  card: {
    background: '#fff9f6',
    border: '1px solid #e8d8cc',
    borderRadius: '16px',
    padding: '1.5rem',
  },
  venue: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.3rem',
    color: '#4a3728',
    marginBottom: '0.75rem',
  },
  address: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#7a5c4f',
    lineHeight: 1.7,
    marginBottom: '1.25rem',
  },
  button: {
    display: 'inline-block',
    background: '#c9a882',
    color: '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    fontWeight: 600,
    padding: '0.65rem 1.5rem',
    borderRadius: '50px',
    textDecoration: 'none',
    letterSpacing: '0.03em',
  },
}
