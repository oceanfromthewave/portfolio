import type { FC } from "react";
import type { ExternalLink } from "../types/content";

type ExternalLinksSectionProps = {
  links: ExternalLink[];
};

const ExternalLinksSection: FC<ExternalLinksSectionProps> = ({ links }) => {
  if (links.length === 0) {
    return null;
  }

  return <section className="section resources"></section>;
};

export default ExternalLinksSection;
