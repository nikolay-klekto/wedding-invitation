import { useEffect, useRef, useState } from "react";

const WEDDING_DAY = 7;
const MONTH = "июня";
const days = [5, 6, 7, 8, 9];

// SVG bow component
function Bow() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40">
      {/* Left wing */}
      <ellipse cx="13" cy="20" rx="13" ry="8" fill="#c0635a" opacity="0.9" transform="rotate(-20 13 20)" />
      <ellipse cx="13" cy="20" rx="9" ry="5" fill="#d4807a" opacity="0.7" transform="rotate(-20 13 20)" />
      {/* Right wing */}
      <ellipse cx="39" cy="20" rx="13" ry="8" fill="#c0635a" opacity="0.9" transform="rotate(20 39 20)" />
      <ellipse cx="39" cy="20" rx="9" ry="5" fill="#d4807a" opacity="0.7" transform="rotate(20 39 20)" />
      {/* Left tail */}
      <path d="M22,22 Q16,32 12,38" stroke="#c0635a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M22,22 Q18,30 16,37" stroke="#c0635a" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Right tail */}
      <path d="M30,22 Q36,32 40,38" stroke="#c0635a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M30,22 Q34,30 36,37" stroke="#c0635a" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Knot */}
      <ellipse cx="26" cy="20" rx="5" ry="4" fill="#a84840" />
      <ellipse cx="26" cy="20" rx="3" ry="2.5" fill="#c0635a" />
    </svg>
  );
}

function FingerprintHeart() {
  const H = "M36,62 C36,62 6,44 6,22 C6,11 14,4 22,4 C28,4 33,8 36,13 C39,8 44,4 50,4 C58,4 66,11 66,22 C66,44 36,62 36,62 Z";
  return (
    <svg width="72" height="66" viewBox="0 0 72 66">
      <defs>
        <pattern id="fingerprint" width="4" height="4" patternUnits="userSpaceOnUse">
          <ellipse cx="2" cy="1" rx="1.2" ry="0.5" fill="#9a3828" opacity="0.65" transform="rotate(30 2 1)" />
          <ellipse cx="3" cy="3" rx="1" ry="0.4" fill="#7a2818" opacity="0.55" transform="rotate(-20 3 3)" />
        </pattern>
        <clipPath id="heart-clip">
          <path d={H} />
        </clipPath>
      </defs>
      <path d={H} fill="url(#fingerprint)" clipPath="url(#heart-clip)" />
      <path d={H} fill="none" stroke="#9e3a32" strokeWidth="1.4" opacity="0.5" />
    </svg>
  );
}

// Torn vertical edge — right side of left half
function TearEdgeRight() {
  return (
    <svg
      className="tear-v tear-v-right"
      viewBox="0 0 16 400"
      preserveAspectRatio="none"
    >
      <path
        d="M16,0 Q2,20 10,40 Q16,60 4,80 Q0,100 12,120 Q16,140 6,160 Q0,180 14,200 Q16,220 4,240 Q0,260 10,280 Q16,300 2,320 Q0,340 12,360 Q16,380 6,400 L0,400 L0,0 Z"
        fill="#f5ece0"
      />
    </svg>
  );
}

// Torn vertical edge — left side of right half
function TearEdgeLeft() {
  return (
    <svg
      className="tear-v tear-v-left"
      viewBox="0 0 16 400"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 Q14,20 6,40 Q0,60 12,80 Q16,100 4,120 Q0,140 10,160 Q16,180 2,200 Q0,220 12,240 Q16,260 6,280 Q0,300 14,320 Q16,340 4,360 Q0,380 10,400 L16,400 L16,0 Z"
        fill="#f5ece0"
      />
    </svg>
  );
}

export default function DateSection() {
  const ref = useRef<HTMLElement>(null);
  const [torn, setTorn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkPosition = () => {
      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const screenCenter = window.innerHeight / 2;
      if (elementCenter <= screenCenter) {
        setTorn(true);
        window.removeEventListener("scroll", checkPosition);
      }
    };

    window.addEventListener("scroll", checkPosition, { passive: true });
    return () => window.removeEventListener("scroll", checkPosition);
  }, []);

  return (
    <section ref={ref} className="date-section">
      <div className="date-stage">

        {/* Envelope — tears left/right on scroll */}
        <div className={`envelope-wrap${torn ? " torn" : ""}`}>

          {/* Left half */}
          <div className="env-half env-left">
            <div className="paper-texture" />
            <div className="bow-corner bow-corner-left"><Bow /></div>
            <TearEdgeRight />
          </div>

          {/* Right half */}
          <div className="env-half env-right">
            <div className="paper-texture" />
            <TearEdgeLeft />
            <div className="bow-corner bow-corner-right"><Bow /></div>
          </div>

          {/* Heart centered over the whole envelope, fades out on tear */}
          <div className={`env-heart-center${torn ? " torn" : ""}`}>
            <FingerprintHeart />
          </div>

        </div>

        {/* Content revealed after tear — sits in the same space */}
        <div className={`date-reveal${torn ? " visible" : ""}`}>
          <p className="date-label">наш день</p>

          <div className="day-slider">
            {days.map((d) => {
              const active = d === WEDDING_DAY;
              return (
                <div key={d} className={`day-item${active ? " active" : ""}`}>
                  <span className="day-num">{String(d).padStart(2, "0")}</span>
                </div>
              );
            })}
          </div>

          <p className="date-month">{MONTH}</p>
          <p className="date-full">Воскресенье, 07 июня 2026</p>
        </div>

      </div>

      <style>{css}</style>
    </section>
  );
}

const css = `
.date-section {
  text-align: center;
  padding: 3rem 1.5rem;
  max-width: 480px;
  width: 100%;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
}

/* ── Stage: envelope and date occupy the same space ── */
.date-stage {
  position: relative;
  width: 300px;
  height: 240px;
  margin: 0 auto;
}

/* ── Envelope ── */
.envelope-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  width: 300px;
  height: 240px;
}

/* Halves */
.env-half {
  position: relative;
  width: 50%;
  height: 100%;
  background: #f5ece0;
  overflow: hidden;
  transition: transform 0.75s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.75s ease;
}

.env-left {
  border-radius: 10px 0 0 10px;
  border: 1px solid #ddd0c0;
  border-right: none;
  transform-origin: left center;
}

.env-right {
  border-radius: 0 10px 10px 0;
  border: 1px solid #ddd0c0;
  border-left: none;
  transform-origin: right center;
}

.envelope-wrap.torn .env-left {
  transform: translateX(-130%) rotate(-4deg);
  opacity: 0;
}

.envelope-wrap.torn .env-right {
  transform: translateX(130%) rotate(4deg);
  opacity: 0;
}

/* Paper noise overlay via ::after */
.env-half::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

/* Paper texture */
.paper-texture {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(180,160,130,0.06) 3px,
      rgba(180,160,130,0.06) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 5px,
      rgba(180,160,130,0.04) 5px,
      rgba(180,160,130,0.04) 6px
    );
  pointer-events: none;
}

/* Heart centered over the full envelope */
.env-heart-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.env-heart-center.torn {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.7);
}

/* Torn vertical edges */
.tear-v {
  position: absolute;
  top: 0;
  width: 16px;
  height: 100%;
}

.tear-v-right {
  right: 0;
}

.tear-v-left {
  left: 0;
}

/* Bow corners */
.bow-corner {
  position: absolute;
  top: 20px;
  z-index: 3;
}

.bow-corner-left {
  left: 20px;
  transform: translateX(-25%);
}

.bow-corner-right {
  right: 20px;
  transform: translateX(25%);
}

.env-heart {
  margin-top: 0.25rem;
}

/* ── Revealed content ── */
.date-reveal {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.6s ease 0.6s,
              transform 0.6s ease 0.6s;
  pointer-events: none;
}

.date-reveal.visible {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

.date-label {
  font-family: 'Lora', serif;
  font-size: 0.85rem;
  color: #9e8c82;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.day-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.day-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1.5px solid transparent;
}

.day-item.active {
  border-color: var(--color-bordeaux);
  background: var(--color-bordeaux-light);
}

.day-num {
  font-family: 'Lora', serif;
  font-size: 1.15rem;
  color: #9e8c82;
  font-weight: 400;
}

.day-item.active .day-num {
  color: var(--color-bordeaux);
  font-weight: 600;
}

.date-month {
  font-family: 'Lora', serif;
  font-size: 0.9rem;
  color: #6b5b52;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
}

.date-full {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #9e8c82;
  letter-spacing: 0.03em;
}
`;
