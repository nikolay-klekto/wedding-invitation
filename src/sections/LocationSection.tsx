const MAP_URL =
  'https://yandex.ru/maps/?text=Дзержинский+район+деревня+Новинка+ул+Центральная+17'

export default function LocationSection() {
  return (
    <section className="location-section">
      <div className="location-photo-wrap">
        <img src="/lavilla-3.jpg" alt="Усадьба LaVilla" className="location-photo" />
        {/* Text block — centered on middle third */}
        <div className="location-overlay-text">
          <p className="location-sub">Праздник пройдёт на базе отдыха</p>
          <p className="location-name">'УСАДЬБА LAVILLA'</p>
          <p className="location-address">Дзержинский р-н, дер. Новинка</p>
          <p className="location-address">ул. Центральная, 17</p>
        </div>

        {/* Button — centered on bottom third */}
        <div className="location-overlay-btn">
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline location-btn"
          >
            открыть карты
          </a>
        </div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
.location-section {
  max-width: 480px;
  width: 100%;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  overflow: hidden;
}

.location-photo-wrap {
  position: relative;
  width: 100%;
}

.location-photo {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0.5);
}

.location-overlay-text {
  position: absolute;
  top: 33.33%;
  left: 0;
  right: 0;
  height: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  text-align: center;
  gap: 0.3rem;
}

.location-overlay-btn {
  position: absolute;
  top: 66.66%;
  left: 0;
  right: 0;
  height: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-sub {
  font-family: var(--font-serif);
  font-size: 0.9rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 0.25rem;
}

.location-name {
  font-family: var(--font-script);
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.location-address {
  font-family: var(--font-serif);
  font-size: 0.9rem;
  color: rgba(255,255,255,0.85);
  line-height: 1.5;
  margin: 0;
}

.location-btn {
  margin-top: 1.25rem;
  border-color: rgba(255,255,255,0.7) !important;
  color: #ffffff !important;
}

.location-btn:hover {
  background: rgba(255,255,255,0.15) !important;
}
`
