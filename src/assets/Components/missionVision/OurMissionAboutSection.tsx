import SectionHeader from "../SectionHeader/SectionHeader";
import type { SectionHeaderProps } from "../../interfaces";
import styles from "./OurMissionAboutSection.module.css";
import { missionVisionCards } from "./missionVisionData";
import MissionVisionCard from "./MissionVisionCard";

const OurMissionAboutSection = ({
  badge,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <section className={styles.section}>
      <SectionHeader badge={badge} title={title} description={description} />

      <div className={styles.cards}>
        {missionVisionCards.map((card,index) => (
          <MissionVisionCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default OurMissionAboutSection;