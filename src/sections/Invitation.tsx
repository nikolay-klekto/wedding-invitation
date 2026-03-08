import type { CSSProperties } from 'react'

export default function Invitation() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Дорогие друзья</h2>
      <hr style={styles.divider} />
      <p style={styles.text}>
        С огромной радостью и трепетом в сердце мы приглашаем вас разделить
        с нами один из самых светлых дней нашей жизни — день нашей свадьбы.
      </p>
      <p style={styles.text}>
        Ваше присутствие рядом сделает этот праздник по-настоящему особенным
        и наполнит его теплом и любовью.
      </p>
      <p style={styles.signature}>С любовью, Коля и Наташа 🤍</p>
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
  heading: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.8rem',
    fontWeight: 400,
    color: '#4a3728',
    marginBottom: '1rem',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #e8d8cc',
    marginBottom: '1.5rem',
  },
  text: {
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: '#7a5c4f',
    lineHeight: 1.8,
    marginBottom: '1rem',
  },
  signature: {
    fontFamily: 'var(--font-heading)',
    fontStyle: 'italic',
    fontSize: '1.1rem',
    color: '#c9a882',
    marginTop: '1.5rem',
  },
}
