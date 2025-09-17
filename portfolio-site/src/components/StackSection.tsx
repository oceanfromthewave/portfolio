import type { FC } from 'react'
import type { SkillSet } from '../types/content'

type StackSectionProps = {
  items: SkillSet[]
}

const StackSection: FC<StackSectionProps> = ({ items }) => {
  return (
    <section className="section">
      <h2>기술 스택</h2>
      <div className="stack">
        {items.map((set) => (
          <div key={set.label}>
            <h3>{set.label}</h3>
            <div className="tag-list">
              {set.items.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StackSection
