import { useState, useEffect } from 'react'

const events = [
  { time: '14:00', title: 'Сбор гостей\n+ фуршет', side: 'left', hint: 'Здесь вы сможете немного пообщаться и перекусить с дороги' },
  { time: '15:00', title: 'Торжественная\nцеремония', side: 'right', hint: 'Здесь проникнуться нашей историей и поздравить нас с новым статусом' },
  { time: '16:00', title: 'Банкет', side: 'left', hint: 'Здесь вкусно покушать 2 горячих, а так же зажигательно потанцевать' },
  { time: '23:50', title: 'Трансфер\nв Минск', side: 'right', hint: 'Здесь обнять мужа и жену, завернуть с собой кусочек торта и с комфортом добраться до Минска' },
]

const BLOCK_H = 130
const TOP_PAD = 20
const TOTAL_H = events.length * BLOCK_H + TOP_PAD * 2
const W = 280

function snakePath() {
  const pts = events.map((ev, i) => ({
    x: ev.side === 'left' ? W * 0.72 : W * 0.28,
    y: TOP_PAD + i * BLOCK_H + BLOCK_H / 2,
  }))

  const start = { x: W * 0.1, y: 0 }
  const end = { x: W * 0.9, y: TOTAL_H }

  let d = `M ${start.x} ${start.y}`
  const allPts = [start, ...pts, end]
  for (let i = 1; i < allPts.length; i++) {
    const prev = allPts[i - 1]
    const curr = allPts[i]
    const cy = (prev.y + curr.y) / 2
    d += ` C ${prev.x},${cy} ${curr.x},${cy} ${curr.x},${curr.y}`
  }
  return d
}

export default function TimelineSection() {
  const [openHint, setOpenHint] = useState<number | null>(null)

  useEffect(() => {
    if (openHint === null) return
    function handleClick() { setOpenHint(null) }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [openHint])

  function toggleHint(i: number, e: React.MouseEvent) {
    e.stopPropagation()
    setOpenHint(openHint === i ? null : i)
  }

  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">Программа дня</h2>

      <p className="timeline-intro">
        Чтобы вы знали, к чему готовиться в этот вечер, составили для вас дорожную карту праздника.
      </p>

      <div className="timeline-body">
        {/* Snake SVG line */}
        <svg
          className="timeline-snake"
          viewBox={`0 0 ${W} ${TOTAL_H}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d={snakePath()}
            fill="none"
            stroke="#8b2635"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Event blocks */}
        {events.map((ev, i) => (
          <div
            key={i}
            className={`timeline-item timeline-item--${ev.side}`}
            style={{ top: TOP_PAD + i * BLOCK_H + BLOCK_H / 2 - 28 }}
          >
            <p className="timeline-time">{ev.time}</p>
            <p className="timeline-title">{ev.title}</p>
            <div className={`timeline-hint-wrap timeline-hint-wrap--${ev.side}`}>
              <button
                className="timeline-hint-btn"
                onClick={(e) => toggleHint(i, e)}
                aria-label="Подсказка"
              >
                подробнее
              </button>
              {openHint === i && (
                <div className={`timeline-tooltip timeline-tooltip--${ev.side}`}>
                  {ev.hint}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
.timeline-section {
  padding: 3rem 1.5rem;
  max-width: 480px;
  width: 100%;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
}

.timeline-heading {
  font-family: var(--font-script);
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 1rem;
}

.timeline-intro {
  font-family: var(--font-serif);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  text-align: center;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.timeline-body {
  position: relative;
  width: 280px;
  margin: 0 auto;
  height: ${TOTAL_H}px;
}

.timeline-snake {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.timeline-item {
  position: absolute;
  width: 44%;
}

.timeline-item--left {
  left: 0;
  text-align: left;
}

.timeline-item--right {
  right: 0;
  text-align: right;
}

.timeline-time {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.2;
}

.timeline-title {
  font-family: var(--font-serif);
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.4;
  white-space: pre-line;
}

.timeline-hint-wrap {
  position: relative;
  display: inline-block;
  margin-top: 0.25rem;
}

.timeline-hint-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  color: var(--color-bordeaux);
  opacity: 0.7;
  padding: 0;
  line-height: 1;
}

.timeline-hint-btn:hover {
  opacity: 1;
}

.timeline-tooltip {
  position: absolute;
  top: 1.5rem;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
  font-family: var(--font-serif);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  line-height: 1.5;
  width: 160px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  z-index: 10;
}

.timeline-tooltip--left {
  left: 0;
}

.timeline-tooltip--right {
  right: 0;
}
`
