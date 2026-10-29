import type { HeroSectionProps } from "../../interfaces";
import StatsCard from "./StatsCard";
import styles from "./HeroSection.module.css";


const HeroSection = ({badge,title,highlight,description,imageAlt,stats,}: HeroSectionProps) => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.imageFrame}>
        <img src="./img/boys.png" alt={imageAlt} className={styles.image} />
      </div>

      <div className={styles.content}>
        <p className={styles.badge}>{badge}</p>
        <h1 className={styles.title}>
          {title} <span className={styles.highlight}>{highlight}</span>
        </h1>
        <p className={styles.description}>{description}</p>
        <StatsCard stats={stats} />
      </div>
    </section>
  );
};

export default HeroSection;
