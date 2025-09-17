import type { FC, ReactNode } from "react";

type TimelineItem = {
  period: string;
  title: string;
  subtitle?: string;
  details?: string[];
  description?: ReactNode;
};

type TimelineSectionProps = {
  heading: string;
  items: TimelineItem[];
};

const TimelineSection: FC<TimelineSectionProps> = ({ heading, items }) => {
  return (
    <section className="section">
      <h2>{heading}</h2>
      <div className="timeline">
        {items.map((item) => (
          <div className="timeline-item" key={`${item.period}-${item.title}`}>
            <div className="timeline-period">{item.period}</div>
            <div>
              <h3>{item.title}</h3>
              {item.subtitle ? (
                <p className="timeline-subtitle">{item.subtitle}</p>
              ) : null}
              {item.details ? (
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
              {item.description ? <p>{item.description}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
