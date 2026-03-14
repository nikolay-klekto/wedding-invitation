import { useState, useEffect, type CSSProperties } from 'react'

interface Props {
  onDone: () => void
}

export default function LoadingScreen({ onDone }: Props) {
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [prevCount, setPrevCount] = useState(0)

  useEffect(() => {
    if (count >= 100) {
      setTimeout(() => {
        setLeaving(true)
        setTimeout(onDone, 600)
      }, 300)
      return
    }

    // Speed up as it progresses: early slow, later faster
    const delay = count < 30 ? 40 : count < 70 ? 25 : count < 90 ? 18 : 12

    const id = setTimeout(() => {
      setPrevCount(count)
      setCount((c) => c + 1)
    }, delay)

    return () => clearTimeout(id)
  }, [count, onDone])

  const changed = count !== prevCount

  return (
    <div style={{ ...s.overlay, ...(leaving ? s.leaving : {}) }}>
      <div style={s.counter}>
        <div key={count} style={{ ...s.number, ...(changed ? s.slideIn : {}) }}>
          {count}%
        </div>
      </div>
    </div>
  )
}

const s: Record<string, CSSProperties> = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: '#faf7f2',
    zIndex: 1000,
    transition: 'opacity 0.6s ease',
  },
  leaving: {
    opacity: 0,
    pointerEvents: 'none',
  },
  counter: {
    position: 'absolute',
    bottom: '3rem',
    right: '2rem',
    overflow: 'hidden',
  },
  number: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: '1.1rem',
    fontWeight: 400,
    color: '#2d2520',
    letterSpacing: '0.02em',
    animation: 'countUp 0.15s ease-out',
  },
  slideIn: {
    animation: 'countUp 0.15s ease-out',
  },
}
