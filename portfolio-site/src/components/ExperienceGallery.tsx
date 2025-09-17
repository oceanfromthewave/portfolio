import { useEffect, useMemo, useState, type FC } from 'react'
import type { Experience } from '../types/content'

type ExperienceGalleryProps = {
  items: Experience[]
}

const ExperienceGallery: FC<ExperienceGalleryProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeItem = useMemo(
    () => (activeId ? items.find((experience) => experience.id === activeId) ?? null : null),
    [items, activeId],
  )

  useEffect(() => {
    if (!activeId) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveId(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeId])

  useEffect(() => {
    if (!activeId) {
      return undefined
    }

    const { body } = document
    const previousOverflow = body.style.overflow
    body.style.overflow = 'hidden'

    return () => {
      body.style.overflow = previousOverflow
    }
  }, [activeId])

  return (
    <section className="section experience-section">
      <h2>프로젝트 &amp; 경험</h2>
      <div className="experience-gallery">
        {items.map((experience) => (
          <button
            key={experience.id}
            type="button"
            className="experience-gallery__card"
            onClick={() => setActiveId(experience.id)}
            aria-label={`${experience.title} 상세 보기`}
          >
            <div className="experience-gallery__thumbnail">
              <img src={experience.thumbnail} alt={experience.thumbnailAlt} loading="lazy" />
            </div>
            <div className="experience-gallery__meta">
              <span className="experience-gallery__period">{experience.period}</span>
              <span className="experience-gallery__title">{experience.title}</span>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="experience-modal" role="dialog" aria-modal="true" aria-labelledby={`experience-${activeItem.id}-title`}>
          <div className="experience-modal__backdrop" onClick={() => setActiveId(null)} />
          <article className="experience-modal__panel">
            <button
              type="button"
              className="experience-modal__close"
              onClick={() => setActiveId(null)}
              aria-label="상세 닫기"
            >
              ×
            </button>
            <span className="experience-period">{activeItem.period}</span>
            <h3 id={`experience-${activeItem.id}-title`}>{activeItem.title}</h3>
            <p className="experience-organization">{activeItem.organization}</p>
            <p className="experience-summary">{activeItem.summary}</p>
            <ul>
              {activeItem.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
            <div className="tag-list">
              {activeItem.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      ) : null}
    </section>
  )
}

export default ExperienceGallery
