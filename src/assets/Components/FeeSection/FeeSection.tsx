import type { SectionHeaderProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";
import type { FeeCardData } from "./FeeCard";
import FeeCard from "./FeeCard";
import styles from "./FeeSection.module.css";

interface FeeSectionProps {
  header: SectionHeaderProps;
  tables: FeeCardData[];
}

const FeeSection = ({ header, tables }: FeeSectionProps) => {
  return (
    <section className={styles.section}>
      <SectionHeader {...header} />

      <div className={styles.cards}>
        {tables.map((table, index) => (
          <FeeCard key={index} {...table} />
        ))}
      </div>
    </section>
  );
};

export default FeeSection;