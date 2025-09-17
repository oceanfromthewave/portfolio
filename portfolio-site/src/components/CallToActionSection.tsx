import type { FC } from 'react'
import type { CallToAction } from '../types/content'

type CallToActionSectionProps = {
  cta: CallToAction
}

const CallToActionSection: FC<CallToActionSectionProps> = ({ cta }) => {
  return (
    <section className="section cta">
      <div className="cta__panel">
        <h2>{cta.title}</h2>
        <p className="cta__message">{cta.message}</p>
        <div className="cta__actions">
          <a className="cta__button cta__button--primary" href={cta.primary.href}>
            {cta.primary.label}
          </a>
          {cta.secondary ? (
            <a className="cta__button cta__button--secondary" href={cta.secondary.href}>
              {cta.secondary.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection
