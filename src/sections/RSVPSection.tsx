import { useState, type CSSProperties, type FormEvent } from 'react'

type FormState = {
  name: string
  attending: 'yes' | 'no' | ''
  guests: string
  comment: string
}

export default function RSVPSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    attending: '',
    guests: '1',
    comment: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    localStorage.setItem('rsvp', JSON.stringify(form))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section style={styles.section}>
        <div style={styles.thanks}>
          <p style={styles.thanksIcon}>🌸</p>
          <h2 style={styles.heading}>Спасибо!</h2>
          <p style={styles.thanksText}>Мы получили ваш ответ и очень ждём вас!</p>
        </div>
      </section>
    )
  }

  return (
    <section style={styles.section}>
      <p style={styles.label}>подтвердите участие</p>
      <h2 style={styles.heading}>RSVP</h2>
      <p style={styles.subtitle}>Пожалуйста, ответьте до 1 мая 2026</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label style={styles.fieldLabel}>Ваше имя *</label>
          <input
            style={styles.input}
            type="text"
            required
            placeholder="Имя и фамилия"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div style={styles.field}>
          <label style={styles.fieldLabel}>Вы придёте? *</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="attending"
                value="yes"
                required
                checked={form.attending === 'yes'}
                onChange={() => setForm({ ...form, attending: 'yes' })}
              />
              <span>Да, буду!</span>
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="attending"
                value="no"
                checked={form.attending === 'no'}
                onChange={() => setForm({ ...form, attending: 'no' })}
              />
              <span>К сожалению, нет</span>
            </label>
          </div>
        </div>
        {form.attending === 'yes' && (
          <div style={styles.field}>
            <label style={styles.fieldLabel}>Количество гостей</label>
            <select
              style={styles.input}
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
            >
              {['1', '2', '3', '4'].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        )}
        <div style={styles.field}>
          <label style={styles.fieldLabel}>Пожелания / аллергии</label>
          <textarea
            style={{ ...styles.input, ...styles.textarea }}
            placeholder="Необязательно..."
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />
        </div>
        <button type="submit" style={styles.button}>Отправить ответ</button>
      </form>
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
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    color: '#9b7e6e',
    marginBottom: '1.75rem',
  },
  form: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  fieldLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#4a3728',
  },
  input: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#4a3728',
    padding: '0.65rem 0.9rem',
    border: '1px solid #e8d8cc',
    borderRadius: '10px',
    background: '#fff',
    outline: 'none',
    width: '100%',
  },
  textarea: {
    minHeight: '80px',
    resize: 'vertical' as const,
  },
  radioGroup: {
    display: 'flex',
    gap: '1rem',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#4a3728',
    cursor: 'pointer',
  },
  button: {
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    background: '#c9a882',
    border: 'none',
    borderRadius: '50px',
    padding: '0.85rem',
    cursor: 'pointer',
    letterSpacing: '0.03em',
    width: '100%',
    marginTop: '0.5rem',
  },
  thanks: {
    padding: '2rem 0',
  },
  thanksIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  thanksText: {
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: '#7a5c4f',
    marginTop: '0.5rem',
  },
}
