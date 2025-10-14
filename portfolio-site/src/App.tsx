import "./App.css";
import { useEffect, useState } from "react";

import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceGallery from "./components/ExperienceGallery";
import ExternalLinksSection from "./components/ExternalLinksSection";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import MetricsSection from "./components/MetricsSection";
import StackSection from "./components/StackSection";
import TimelineSection from "./components/TimelineSection";
import {
  about,
  
  contact,
  education,
  experiences,
  externalLinks,
  hero,
  highlights,
  metrics,
  skillSets,
  trainings,
} from "./data/profile";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem("theme") as "light" | "dark" | null;
      if (saved) return saved;
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <>
      <header className="site-header" role="banner">
        <div className="site-header__inner">
          <a className="site-brand" href="#home">
            Portfolio
          </a>
          <nav className="site-nav" aria-label="주요 섹션">
            <ul className="site-nav__list">
              <li>
                <a className="site-nav__link" href="#about">
                  소개
                </a>
              </li>
              <li>
                <a className="site-nav__link" href="#metrics">
                  지표
                </a>
              </li>
              <li>
                <a className="site-nav__link" href="#highlights">
                  하이라이트
                </a>
              </li>
              <li>
                <a className="site-nav__link" href="#experience">
                  경험
                </a>
              </li>
              <li>
                <a className="site-nav__link" href="#skills">
                  스택
                </a>
              </li>
              <li>
                <a className="site-nav__link" href="#links">
                  링크
                </a>
              </li>
              <li>
                <a className="site-nav__link" href="#education">
                  학력
                </a>
              </li>
              <li>
                <a className="site-nav__link" href="#training">
                  교육
                </a>
              </li>
              <li>
                <a className="site-nav__link" href="#contact">
                  연락
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"
            }
            title={theme === "dark" ? "라이트 모드" : "다크 모드"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>
      <div id="home" className="section-anchor" />
      <div className="page">
        <HeroSection
          title={hero.title}
          summary={hero.summary}
          meta={hero.meta}
        />
        <main>
          <section id="about" className="section-anchor">
            <AboutSection about={about} />
          </section>
          <section id="metrics" className="section-anchor">
            <MetricsSection metrics={metrics} />
          </section>
          <section id="highlights" className="section-anchor">
            <HighlightsSection items={highlights} />
          </section>
          <section id="experience" className="section-anchor">
            <ExperienceGallery items={experiences} />
          </section>
          <section id="skills" className="section-anchor">
            <StackSection items={skillSets} />
          </section>
          <section id="links" className="section-anchor">
            <ExternalLinksSection links={externalLinks} />
          </section>
          <section id="education" className="section-anchor">
            <TimelineSection
              heading="학력"
              items={education.map((item) => ({
                period: item.period,
                title: item.title,
                subtitle: item.subtitle,
                details: item.details,
              }))}
            />
          </section>
          <section id="training" className="section-anchor">
            <TimelineSection
              heading="교육"
              items={trainings.map((item) => ({
                period: item.period,
                title: item.title,
                subtitle: item.provider,
                description: item.description,
              }))}
            />
          </section>
          {/** Call-to-action section removed per request **/}
          <section id="contact" className="section-anchor">
            <ContactSection contact={contact} />
          </section>
        </main>
        <footer className="footer">
          <p>Copyright {new Date().getFullYear()} Web Developer Portfolio.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
