import { useState, type CSSProperties, type FormEvent } from 'react'

type FormState = {
  name: string
  attending: 'yes' | 'no' | 'later' | ''
  allergy: string
  drinks: string[]
}

const drinkOptions = [
  'Шампанское',
  'Красное вино',
  'Белое вино',
  'Коньяк',
  'Безалкогольные напитки',
]

export default function RSVPSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    attending: '',
    allergy: '',
    drinks: [],
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.attending) {
      setError(true)
      return
    }
    setError(false)

    const ACTION = 'https://docs.google.com/forms/u/0/d/1uD5cnzePXL3dN2avd6KHpn-QlVgrCrGC9Gv3gLiAsc4/formResponse'

    const attendingMap: Record<string, string> = {
      yes:   'Смогу прийти',
      no:    'Не смогу прийти',
      later: 'Сообщу позже',
    }

    const body = new FormData()
    body.append('entry.145834640', form.name)
    body.append('entry.224664885', form.allergy)
    if (form.attending) body.append('entry.30633168', attendingMap[form.attending])
    form.drinks.forEach((d) => body.append('entry.165075308', d))

    // no-cors because Google Forms doesn't allow cross-origin — response is opaque but data is saved
    fetch(ACTION, { method: 'POST', body, mode: 'no-cors' }).catch(() => {})

    setSubmitted(true)
  }

  function toggleDrink(drink: string) {
    setForm((f) => ({
      ...f,
      drinks: f.drinks.includes(drink)
        ? f.drinks.filter((d) => d !== drink)
        : [...f.drinks, drink],
    }))
  }

  if (submitted) {
    return (
      <section style={s.section}>
        <div style={s.thanks}>
          <h2 style={s.thanksHeading}>Анкета</h2>
          <p style={s.thanksText}>
            Спасибо! Мы получили ваш ответ.<br />
            Ждём вас 07 июня 2026 ♥
          </p>
        </div>
      </section>
    )
  }

  return (
    <section style={s.section}>
      <h2 style={s.heading}>Анкета</h2>
      <p style={s.subtitle}>
        Просим вас сообщить, сможете вы быть с нами, заполнив форму ниже:
      </p>

      <form onSubmit={handleSubmit} style={s.form}>
        {/* Name */}
        <div style={s.field}>
          <label style={s.label}>Имя и Фамилия</label>
          <input
            style={s.input}
            type="text"
            required
            placeholder=""
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <div style={s.underline} />
        </div>

        {/* Attending */}
        <div style={s.field}>
          <label style={s.label}>Подтвердите присутствие на торжестве</label>
          <div style={s.radioGroup}>
            {[
              { val: 'yes',   text: 'Смогу прийти' },
              { val: 'no',    text: 'Не смогу прийти' },
              { val: 'later', text: 'Сообщу позже' },
            ].map(({ val, text }) => (
              <label key={val} style={s.radioRow}>
                <div style={{
                  ...s.radio,
                  ...(form.attending === val ? s.radioChecked : {}),
                  ...(error && !form.attending ? s.radioError : {}),
                }}>
                  {form.attending === val && <div style={s.radioDot} />}
                </div>
                <input
                  type="radio"
                  name="attending"
                  value={val}
                  checked={form.attending === val}
                  onChange={() => { setForm({ ...form, attending: val as FormState['attending'] }); setError(false) }}
                  style={{ display: 'none' }}
                />
                <span style={s.radioLabel}>{text}</span>
              </label>
            ))}
          </div>
          {error && !form.attending && (
            <p style={s.errorText}>Пожалуйста, выберите один из вариантов</p>
          )}
        </div>

        {/* Allergy */}
        <div style={s.field}>
          <label style={s.label}>Есть ли у вас аллергические реакции или ограничения по питанию?</label>
          <input
            style={s.input}
            type="text"
            placeholder=""
            value={form.allergy}
            onChange={(e) => setForm({ ...form, allergy: e.target.value })}
          />
          <div style={s.underline} />
        </div>

        {/* Drinks */}
        <div style={s.field}>
          <label style={s.label}>Предпочтения по напиткам</label>
          <div style={s.checkboxGroup}>
            {drinkOptions.map((drink) => (
              <label key={drink} style={s.checkRow}>
                <div style={{
                  ...s.checkbox,
                  ...(form.drinks.includes(drink) ? s.checkboxChecked : {}),
                }}>
                  {form.drinks.includes(drink) && <span style={s.checkmark}>✓</span>}
                </div>
                <input
                  type="checkbox"
                  checked={form.drinks.includes(drink)}
                  onChange={() => toggleDrink(drink)}
                  style={{ display: 'none' }}
                />
                <span style={s.checkLabel}>{drink}</span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="btn-primary" style={s.btn}>
          Отправить
        </button>
      </form>
    </section>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
    padding: '3rem 1.5rem',
    maxWidth: '480px',
    width: '100%',
    background: 'var(--color-bg)',
    borderTop: '1px solid var(--color-border)',
  },
  heading: {
    fontFamily: 'var(--font-script)',
    fontSize: '2.2rem',
    fontWeight: 600,
    color: 'var(--color-text)',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.95rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
    marginBottom: '2rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.4,
  },
  input: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1rem',
    color: 'var(--color-text)',
    padding: '0.4rem 0',
    border: 'none',
    borderBottom: '1px solid var(--color-border)',
    background: 'transparent',
    outline: 'none',
    width: '100%',
  },
  underline: {
    display: 'none',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: '0.25rem',
  },
  radioRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: 'pointer',
  },
  radio: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '1.5px solid var(--color-border)',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border-color 0.15s',
  },
  radioChecked: {
    borderColor: 'var(--color-bordeaux)',
  },
  radioError: {
    borderColor: '#c0392b',
  },
  errorText: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.8rem',
    color: '#c0392b',
    marginTop: '0.25rem',
  },
  radioDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'var(--color-bordeaux)',
  },
  radioLabel: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.95rem',
    color: 'var(--color-text)',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: '0.25rem',
  },
  checkRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: 'pointer',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    border: '1.5px solid var(--color-border)',
    borderRadius: '4px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border-color 0.15s, background 0.15s',
  },
  checkboxChecked: {
    borderColor: 'var(--color-bordeaux)',
    background: 'var(--color-bordeaux)',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: '0.75rem',
    lineHeight: 1,
  },
  checkLabel: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.95rem',
    color: 'var(--color-text)',
  },
  btn: {
    width: '100%',
    textAlign: 'center' as const,
    marginTop: '0.5rem',
  },
  thanks: {
    textAlign: 'center' as const,
    padding: '1rem 0',
  },
  thanksHeading: {
    fontFamily: 'var(--font-script)',
    fontSize: '2rem',
    color: 'var(--color-text)',
    marginBottom: '1rem',
  },
  thanksText: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.7,
  },
}
