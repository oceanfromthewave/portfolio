import type { FC } from 'react'

export type HeroSectionProps = {
  title: string
  summary: string
  meta: {
    role: string
    duty: string
  }
}

const HeroSection: FC<HeroSectionProps> = ({ title, summary, meta }) => {
  return (
    <header className="hero">
      <h1>{title}</h1>
      <p className="hero__summary">{summary}</p>
      <div className="hero__meta">
        <div>
          <span className="meta-label">역할</span>
          <span>{meta.role}</span>
        </div>
        <div>
          <span className="meta-label">업무</span>
          <span>{meta.duty}</span>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
