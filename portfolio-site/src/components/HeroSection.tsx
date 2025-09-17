import type { FC } from 'react'

export type HeroSectionProps = {
  eyebrow: string
  title: string
  summary: string
  meta: {
    role: string
    duty: string
  }
}

const HeroSection: FC<HeroSectionProps> = ({ eyebrow, title, summary, meta }) => {
  return (
    <header className="hero">
      <p className="hero__eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero__summary">{summary}</p>
      <div className="hero__meta">
        <div>
          <span className="meta-label">재직</span>
          <span>{meta.role}</span>
        </div>
        <div>
          <span className="meta-label">담당</span>
          <span>{meta.duty}</span>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
