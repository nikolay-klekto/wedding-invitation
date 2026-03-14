import type { CSSProperties } from 'react'

const MAP_URL =
  'https://yandex.ru/maps/?text=Дзержинский+район+деревня+Новинка+ул+Центральная+17'

export default function LocationSection() {
  return (
    <section style={s.section}>
      <p style={s.text}>
        Праздник пройдёт на базе отдыха
      </p>
      <p style={s.placeName}>'УСАДЬБА LAVILLA'</p>
      <p style={s.address}>Дзержинский р-н, дер. Новинка</p>
      <p style={s.address}>ул. Центральная, 17</p>

      <a
        href={MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline"
        style={s.btn}
      >
        открыть карты
      </a>
    </section>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
    padding: '2.5rem 1.5rem',
    maxWidth: '480px',
    width: '100%',
    background: 'var(--color-bg)',
  },
  text: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1rem',
    color: 'var(--color-text-muted)',
    marginBottom: '0.5rem',
  },
  placeName: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.05rem',
    fontWeight: 600,
    color: 'var(--color-text)',
    marginBottom: '0.4rem',
  },
  address: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
    margin: 0,
  },
  btn: {
    marginTop: '1.25rem',
    display: 'inline-block',
  },
}
