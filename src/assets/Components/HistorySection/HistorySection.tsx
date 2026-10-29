import type { SectionHeaderProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";

import styles from "./HistorySection.module.css";
import type { HistoryItem } from "./TimelineItem";
import TimelineItem from "./TimelineItem";

interface HistorySectionProps {
  header: SectionHeaderProps;
  items: HistoryItem[];
}

const HistorySection = ({ header, items }: HistorySectionProps) => {
  return (
    <section className={styles.section}>
      <SectionHeader {...header} />

      <div className={styles.card}>
        <ol className={styles.list}>
          {items.map(({ id, ...item }) => (
            <TimelineItem key={id} {...item} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HistorySection;