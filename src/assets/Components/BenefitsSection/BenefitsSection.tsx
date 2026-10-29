import type { BenefitsSectionProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";
import BenefitCard from "./BenefitCard";
import styles from "./BenefitsSection.module.css";

const BenefitsSection = ({ header, benefits }: BenefitsSectionProps) => {
  return (
    <section id="academics" className={styles.section}>
      <SectionHeader {...header} />

      <div className={styles.grid}>
        {benefits.map(({...benefit },i) => (
          <BenefitCard key={i} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;