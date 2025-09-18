import type { FC } from "react";
import type { ExternalLink } from "../types/content";

type ExternalLinksSectionProps = {
  links: ExternalLink[];
};

const ExternalLinksSection: FC<ExternalLinksSectionProps> = ({ links }) => {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className="section resources">
      <h2>외부 링크</h2>
      <ul className="resources__list">
        {links.map((link) => (
          <li key={link.href} className="resources__item">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="resources__link"
            >
              {link.label}
            </a>
            {link.description ? (
              <p className="resources__description">{link.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExternalLinksSection;

