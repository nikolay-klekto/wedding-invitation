import { useEffect } from 'react'
import './App.css'
import Hero from './sections/Hero'
import Invitation from './sections/Invitation'
import DateSection from './sections/DateSection'
import LocationSection from './sections/LocationSection'
import TimelineSection from './sections/TimelineSection'
import DressCodeSection from './sections/DressCodeSection'
import DetailsSection from './sections/DetailsSection'
import RSVPSection from './sections/RSVPSection'
import FooterSection from './sections/FooterSection'

declare global {
  interface Window {
    __reactReady?: () => void
  }
}

function App() {
  useEffect(() => {
    // Signal to the native HTML loader that React is mounted and ready
    window.__reactReady?.()
  }, [])

  return (
    <>
      <Hero />
      <Invitation />
      <DateSection />
      <LocationSection />
      <TimelineSection />
      <DressCodeSection />
      <DetailsSection />
      <RSVPSection />
      <FooterSection />
    </>
  )
}

export default App
