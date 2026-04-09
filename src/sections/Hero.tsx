import type { CSSProperties } from 'react'
import coupleImg from '../assets/images/couple.jpg'

export default function Hero() {
  return (
    <section style={s.section}>
      <p style={s.caption}>Вы дождались...</p>

      <h1 style={s.title}>Мы женимся!</h1>

      <div style={s.photoWrap}>
        <img src={coupleImg} alt="Коля и Наташа" style={s.photo} />
        <div style={s.namesRow}>
          <span style={s.photoName}>Коля</span>
          <span style={s.heart}>♥</span>
          <span style={s.photoName}>Наташа</span>
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
    padding: '4rem 1.5rem 1rem',
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
  photoWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    margin: '0 -1.5rem 1.5rem',
  },
  photo: {
    width: '100%',
    display: 'block',
  },
  namesRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
  },
  photoName: {
    fontFamily: 'var(--font-script)',
    fontSize: '1.6rem',
    color: 'var(--color-bordeaux)',
    fontWeight: 600,
    lineHeight: 1,
  },
  heart: {
    fontSize: '1.5rem',
    color: 'var(--color-heart)',
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
