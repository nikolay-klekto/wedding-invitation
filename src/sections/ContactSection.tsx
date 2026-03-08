import type { CSSProperties } from 'react'

export default function ContactSection() {
  return (
    <section style={styles.section}>
      <p style={styles.label}>есть вопросы?</p>
      <h2 style={styles.heading}>Свадебный организатор</h2>
      <div style={styles.card}>
        <div style={styles.avatar}>👩</div>
        <p style={styles.name}>Имя организатора</p>
        <p style={styles.role}>Wedding planner</p>
        <div style={styles.contacts}>
          <a href="tel:+375000000000" style={styles.link}>📞 +375 00 000-00-00</a>
          <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" style={styles.link}>
            ✉️ Написать в Telegram
          </a>
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
    marginBottom: '1.5rem',
  },
  card: {
    background: '#fff9f6',
    border: '1px solid #e8d8cc',
    borderRadius: '16px',
    padding: '1.5rem',
  },
  avatar: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
  },
  name: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.2rem',
    color: '#4a3728',
    marginBottom: '0.25rem',
  },
  role: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    color: '#9b7e6e',
    marginBottom: '1.25rem',
    fontStyle: 'italic',
  },
  contacts: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  link: {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#c9a882',
    textDecoration: 'none',
    padding: '0.6rem',
    background: '#fff',
    borderRadius: '10px',
    border: '1px solid #e8d8cc',
  },
}
