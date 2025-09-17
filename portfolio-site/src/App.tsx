import "./App.css"

import AboutSection from "./components/AboutSection"
import CallToActionSection from "./components/CallToActionSection"
import ContactSection from "./components/ContactSection"
import ExperienceGallery from "./components/ExperienceGallery"
import ExternalLinksSection from "./components/ExternalLinksSection"
import HeroSection from "./components/HeroSection"
import HighlightsSection from "./components/HighlightsSection"
import MetricsSection from "./components/MetricsSection"
import StackSection from "./components/StackSection"
import TimelineSection from "./components/TimelineSection"
import {
  about,
  callToAction,
  contact,
  education,
  experiences,
  externalLinks,
  hero,
  highlights,
  metrics,
  skillSets,
  trainings,
} from "./data/profile"

function App() {
  return (
    <div className="page">
      <HeroSection
        eyebrow={hero.eyebrow}
        title={hero.title}
        summary={hero.summary}
        meta={hero.meta}
      />
      <main>
        <AboutSection about={about} />
        <MetricsSection metrics={metrics} />
        <HighlightsSection items={highlights} />
        <ExperienceGallery items={experiences} />
        <StackSection items={skillSets} />
        <ExternalLinksSection links={externalLinks} />
        <TimelineSection
          heading="학력"
          items={education.map((item) => ({
            period: item.period,
            title: item.title,
            subtitle: item.subtitle,
            details: item.details,
          }))}
        />
        <TimelineSection
          heading="교육"
          items={trainings.map((item) => ({
            period: item.period,
            title: item.title,
            subtitle: item.provider,
            description: item.description,
          }))}
        />
        <CallToActionSection cta={callToAction} />
        <ContactSection contact={contact} />
      </main>
      <footer className="footer">
        <p>Copyright {new Date().getFullYear()} Web Developer Portfolio.</p>
      </footer>
    </div>
  )
}

export default App

