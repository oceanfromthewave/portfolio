import type { FC } from "react";
import type { About } from "../types/content";

type AboutSectionProps = {
  about: About;
};

const AboutSection: FC<AboutSectionProps> = ({ about }) => {
  return (
    <section className="section about">
      <h2>{about.title}</h2>
      <div className="about__content">
        <p className="about__description">{about.description}</p>
        <ul className="about__list">
          {about.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
