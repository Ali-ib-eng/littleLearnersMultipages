import type { SectionHeaderProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./ProcessSection.module.css";
import type { ProcessStep } from "./StepCard";
import StepCard from "./StepCard";

interface ProcessSectionProps {
  header: SectionHeaderProps;
  steps: ProcessStep[];
}

const ProcessSection = ({ header, steps }: ProcessSectionProps) => {
  return (
    <section className={styles.section}>
      <SectionHeader {...header} />

      <div className={styles.grid}>
        {steps.map(({...step }, index) => (
          <StepCard
            key={index}
            number={String(index + 1).padStart(2, "0")}
            {...step}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;