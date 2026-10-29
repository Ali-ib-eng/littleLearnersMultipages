import type { SectionHeaderProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";
import type { TeamMember } from "./TeamCard";
import TeamCard from "./TeamCard";

import styles from "./TeamSection.module.css";

interface TeamSectionProps {
  header: SectionHeaderProps;
  members: TeamMember[];
}

const TeamSection = ({ header, members }: TeamSectionProps) => {
  return (
    <section className={styles.section}>
      <SectionHeader {...header} />

      <div className={styles.grid}>
        {members.map(({...member },index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;