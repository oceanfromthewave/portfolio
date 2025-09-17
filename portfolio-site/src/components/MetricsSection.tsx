import type { FC } from 'react'
import type { Metric } from '../types/content'

type MetricsSectionProps = {
  metrics: Metric[]
}

const MetricsSection: FC<MetricsSectionProps> = ({ metrics }) => {
  return (
    <section className="section metrics">
      <h2>숫자로 보는 역량</h2>
      <div className="metrics__grid">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span className="metric-card__value">{metric.value}</span>
            <span className="metric-card__label">{metric.label}</span>
            {metric.helpText ? <p className="metric-card__help">{metric.helpText}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export default MetricsSection
