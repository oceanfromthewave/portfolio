import type { FC } from 'react'

type HighlightsSectionProps = {
  items: string[]
}

const HighlightsSection: FC<HighlightsSectionProps> = ({ items }) => {
  return (
    <section className="section">
      <h2>핵심 역량</h2>
      <ul className="highlight-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default HighlightsSection
