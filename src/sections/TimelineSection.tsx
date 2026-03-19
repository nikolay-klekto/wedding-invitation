const events = [
  { time: '13:00', title: 'Welcome', side: 'left' },
  { time: '13:30', title: 'Торжественная\nцеремония', side: 'right' },
  { time: '14:30', title: 'Начало банкета', side: 'left' },
  { time: '22:00', title: 'Окончание вечера', side: 'right' },
]

const BLOCK_H = 110
const TOP_PAD = 20
const TOTAL_H = events.length * BLOCK_H + TOP_PAD * 2
const W = 280
const MID = W / 2

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
  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">Программа дня</h2>

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
`
