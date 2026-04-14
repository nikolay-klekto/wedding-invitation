import { useState, useEffect } from 'react'
import type { CSSProperties } from 'react'

const PHONE = '+375291828667'
const isMobile = () => /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

export default function DetailsSection() {
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    if (!showTooltip) return
    function handleClick() { setShowTooltip(false) }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [showTooltip])

  function handleAnnaClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!isMobile()) {
      e.preventDefault()
      e.stopPropagation()
      setShowTooltip((v) => !v)
    }
  }

  return (
    <section style={s.section}>
      <h2 style={s.heading}>Детали</h2>

      <div style={s.divider}>
        <span style={s.arrow}>❧</span>
        <span style={s.heartSmall}>♥</span>
        <span style={s.arrow}>❧</span>
      </div>

      <p style={s.text}>
        Ваши улыбки и смех подарят нам незабываемое счастье в этот день,
        а пожелания в конвертах помогут осуществить <strong>НАШИ будущие мечты!</strong>
      </p>

      <div style={s.dividerSimple} />

      <p style={s.text}>
        Если захотите подарить нам такой красивый элемент, как букет — нам будет очень приятно,
        если вы свяжетесь с{' '}
        <span style={s.annaWrap}>
          <a
            href={`tel:${PHONE}`}
            style={s.annaLink}
            onClick={handleAnnaClick}
          >
            Анной Владимировной
          </a>
          {showTooltip && (
            <span style={s.tooltip}>{PHONE}</span>
          )}
        </span>
        . Она закупит одинаковых цветов под ваше желаемое количество.
        Так, утром после свадьбы у нас будет один огромный букет одинаковых цветов
        (с которым Наташе будет комфортно фотографироваться).
      </p>
    </section>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
    textAlign: 'center',
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
    marginBottom: '1rem',
  },
  divider: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.25rem',
    color: 'var(--color-pink)',
  },
  arrow: {
    fontSize: '1.1rem',
    color: 'var(--color-pink)',
  },
  heartSmall: {
    fontSize: '0.85rem',
    color: 'var(--color-heart)',
  },
  dividerSimple: {
    width: '60px',
    height: '1px',
    background: 'var(--color-border)',
    margin: '1.25rem auto',
  },
  text: {
    fontFamily: 'var(--font-serif)',
    fontSize: '0.95rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.8,
    textAlign: 'center',
  },
  annaWrap: {
    position: 'relative',
    display: 'inline-block',
  },
  annaLink: {
    color: 'var(--color-bordeaux)',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  tooltip: {
    position: 'absolute',
    bottom: '1.6rem',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff',
    border: '1px solid var(--color-border)',
    borderRadius: '8px',
    padding: '0.4rem 0.75rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    color: 'var(--color-text)',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    zIndex: 10,
  },
}
