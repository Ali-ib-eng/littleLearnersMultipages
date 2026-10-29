import type { SectionHeaderProps } from "../../interfaces";
import AwardCard from "../AwardCard/AwardCard";
import type { Award } from "../AwardCard/AwardCard";
import MoreAwards from "../MoreAwards/MoreAwards";
import SectionHeader from "../SectionHeader/SectionHeader";
import Slider from "../Slider/Slider";
import styles from "./AwardsSection.module.css";

interface AwardsSectionProps {
  header: SectionHeaderProps;
  awards: Award[];
  moreText: string;
}

const AwardsSection = ({ header, awards, moreText }: AwardsSectionProps) => {
  return (
    <section className={styles.section}>
      <SectionHeader {...header} />
      <Slider
        items={awards}
        variant="bottom"
        renderItem={(award) => <AwardCard {...award} />}
        footerStart={<MoreAwards text={moreText} />}
      />
    </section>
  );
};

export default AwardsSection;