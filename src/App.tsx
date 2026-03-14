import { useState } from 'react'
import './App.css'
import LoadingScreen from './sections/LoadingScreen'
import Hero from './sections/Hero'
import Invitation from './sections/Invitation'
import DateSection from './sections/DateSection'
import LocationSection from './sections/LocationSection'
import TimelineSection from './sections/TimelineSection'
import DressCodeSection from './sections/DressCodeSection'
import DetailsSection from './sections/DetailsSection'
import ContactSection from './sections/ContactSection'
import RSVPSection from './sections/RSVPSection'
import FooterSection from './sections/FooterSection'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <Hero />
      <Invitation />
      <DateSection />
      <LocationSection />
      <TimelineSection />
      <DressCodeSection />
      <DetailsSection />
      <ContactSection />
      <RSVPSection />
      <FooterSection />
    </>
  )
}

export default App
