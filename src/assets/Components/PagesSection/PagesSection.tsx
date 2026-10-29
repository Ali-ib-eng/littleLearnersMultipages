import type { PagesSectionProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";
import PageCard from "./PageCard";
import styles from "./PagesSection.module.css";

const PagesSection = ({ header, pages }: PagesSectionProps) => {
  return (
    <section className={styles.section}>
      <SectionHeader {...header} />
      <div className={styles.grid}>
        {pages.map(({id, ...page }) => (
          <PageCard key={id} {...page} />
        ))}
      </div>
    </section>
  );
};

export default PagesSection;