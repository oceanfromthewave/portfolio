import type { FC } from "react";

type HighlightsSectionProps = {
  items: string[];
};

const HighlightsSection: FC<HighlightsSectionProps> = ({ items }) => {
  return (
    <section className="section section--highlights">
      <h2>주요 하이라이트</h2>
      <ul className="highlight-list" role="list">
        {items.map((item, idx) => (
          <li className="highlight-card" key={`${item}-${idx}`}>
            <span className="highlight-card__icon" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="url(#g)" opacity="0.15" />
                <path
                  d="M9.2 12.6l1.9 1.9 3.8-3.8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--color-accent)" />
                    <stop offset="1" stopColor="var(--color-accent-2)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <p className="highlight-card__text">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HighlightsSection;

