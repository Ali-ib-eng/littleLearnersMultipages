import type { SectionHeaderProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./LearnSection.module.css";
import type { Subject } from "./SubjectCard";
import SubjectCard from "./SubjectCard";
interface LearnSectionProps {
  header: SectionHeaderProps;
  subjects: Subject[];
}

const LearnSection = ({header,subjects}: LearnSectionProps) => {
  return (
    <section className={styles.section}>
      <SectionHeader {...header} />
      <div className={styles.grid}>
        {subjects.map(({ id, ...subject }) => (
          <SubjectCard key={id} {...subject} />
        ))}
      </div>
    </section>
  );
};

export default LearnSection;