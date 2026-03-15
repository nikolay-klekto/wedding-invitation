import { useEffect, useRef, useState } from "react";

const WEDDING_DAY = 7;
const MONTH = "июня";
const days = [5, 6, 7, 8, 9];

export default function DateSection() {
  const ref = useRef<HTMLElement>(null);
  const [torn, setTorn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay so user sees the envelope first
          setTimeout(() => setTorn(true), 500);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="date-section">
      {/* Envelope / letter — tears apart on scroll */}
      <div className={`envelope-wrap${torn ? " torn" : ""}`}>
        {/* Top half of letter */}
        <div className="letter-top">
          <div className="letter-top-inner">
            {/* Envelope flap triangle */}
            <div className="flap" />
            <p className="letter-text">Коля & Наташа</p>
            <p className="letter-subtext">приглашают вас</p>
          </div>
          {/* Torn edge SVG */}
          <svg
            className="tear-edge top"
            viewBox="0 0 320 16"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q20,14 40,6 Q60,0 80,10 Q100,18 120,8 Q140,0 160,12 Q180,20 200,8 Q220,0 240,10 Q260,18 280,6 Q300,0 320,8 L320,16 L0,16 Z"
              fill="#faf7f2"
            />
          </svg>
        </div>

        {/* Bottom half of letter */}
        <div className="letter-bottom">
          {/* Torn edge SVG */}
          <svg
            className="tear-edge bottom"
            viewBox="0 0 320 16"
            preserveAspectRatio="none"
          >
            <path
              d="M0,16 Q20,2 40,10 Q60,16 80,6 Q100,0 120,8 Q140,14 160,4 Q180,0 200,8 Q220,14 240,6 Q260,0 280,10 Q300,16 320,8 L320,0 L0,0 Z"
              fill="#faf7f2"
            />
          </svg>
          <div className="letter-bottom-inner">
            <p className="letter-date">07 · 06 · 2026</p>
            <p className="letter-place">Усадьба LaVilla</p>
          </div>
        </div>
      </div>

      {/* Content revealed after tear */}
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

/* ── Envelope ── */
.envelope-wrap {
  position: relative;
  margin: 0 auto 0;
  width: 280px;
  transition: margin 0.5s ease;
}

.envelope-wrap.torn {
  margin-bottom: 0;
}

/* Top half */
.letter-top {
  background: #fff8f0;
  border: 1px solid #e8d8c8;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  position: relative;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.7s ease;
  transform-origin: top center;
  overflow: hidden;
}

.envelope-wrap.torn .letter-top {
  transform: translateY(-140%);
  opacity: 0;
}

.letter-top-inner {
  padding: 1.5rem 1.25rem 0.75rem;
}

.flap {
  width: 0;
  height: 0;
  border-left: 140px solid transparent;
  border-right: 140px solid transparent;
  border-top: 60px solid #f0e4d4;
  margin: -1.5rem -1.25rem 1rem;
}

.letter-text {
  font-family: 'Caveat', cursive;
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d2520;
  margin-bottom: 0.2rem;
}

.letter-subtext {
  font-family: 'Lora', serif;
  font-size: 0.85rem;
  color: #9e8c82;
  font-style: italic;
}

.tear-edge {
  display: block;
  width: 100%;
  height: 16px;
  position: absolute;
}

.tear-edge.top {
  bottom: 0;
  left: 0;
}

.tear-edge.bottom {
  top: 0;
  left: 0;
}

/* Bottom half */
.letter-bottom {
  background: #fff8f0;
  border: 1px solid #e8d8c8;
  border-top: none;
  border-radius: 0 0 8px 8px;
  position: relative;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.7s ease;
  transition-delay: 0.05s;
  transform-origin: bottom center;
  overflow: hidden;
}

.envelope-wrap.torn .letter-bottom {
  transform: translateY(140%);
  opacity: 0;
}

.letter-bottom-inner {
  padding: 0.75rem 1.25rem 1.25rem;
}

.letter-date {
  font-family: 'Lora', serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #2d2520;
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.letter-place {
  font-family: 'Lora', serif;
  font-size: 0.8rem;
  color: #9e8c82;
}

/* ── Revealed content ── */
.date-reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.6s ease 0.55s,
              transform 0.6s ease 0.55s;
  /* takes no space while hidden */
  max-height: 0;
  overflow: hidden;
}

.date-reveal.visible {
  opacity: 1;
  transform: translateY(0);
  max-height: 300px;
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
