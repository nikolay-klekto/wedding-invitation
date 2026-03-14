import type { CSSProperties } from 'react'

export default function Hero() {
  return (
    <section style={s.section}>
      <p style={s.caption}>Вы дождались...</p>

      <h1 style={s.title}>Мы женимся!</h1>

      <div style={s.photoRow}>
        <div style={s.photoBox}>
          <div style={s.photoPlaceholder}>🤵</div>
          <p style={s.photoName}>Коля</p>
        </div>

        <span style={s.heart}>♥</span>

        <div style={s.photoBox}>
          <div style={s.photoPlaceholder}>👰</div>
          <p style={s.photoName}>Наташа</p>
        </div>
      </div>

      <div style={s.deco}>
        <span style={s.decoHeart}>♡</span>
        <span style={s.decoHeart}>♡</span>
        <span style={s.decoHeart}>♡</span>
      </div>
    </section>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
    padding: '4rem 1.5rem 3rem',
    background: 'var(--color-bg)',
    width: '100%',
    maxWidth: '480px',
  },
  caption: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.95rem',
    color: 'var(--color-text-light)',
    marginBottom: '0.25rem',
    fontStyle: 'italic',
  },
  title: {
    fontFamily: 'var(--font-script)',
    fontSize: '3.5rem',
    fontWeight: 700,
    color: 'var(--color-text)',
    lineHeight: 1.1,
    marginBottom: '2rem',
  },
  photoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  photoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    flex: 1,
    maxWidth: '140px',
  },
  photoPlaceholder: {
    width: '100%',
    aspectRatio: '3/4',
    background: 'var(--color-bg-2)',
    border: '1px solid var(--color-border)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
  },
  photoName: {
    fontFamily: 'var(--font-script)',
    fontSize: '1.6rem',
    color: 'var(--color-bordeaux)',
    fontWeight: 600,
    margin: 0,
    lineHeight: 1,
  },
  heart: {
    fontSize: '2rem',
    color: 'var(--color-heart)',
    flexShrink: 0,
  },
  deco: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
  },
  decoHeart: {
    fontSize: '1.2rem',
    color: 'var(--color-pink)',
  },
}
