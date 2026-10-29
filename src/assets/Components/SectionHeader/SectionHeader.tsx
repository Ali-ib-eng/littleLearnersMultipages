import type { SectionHeaderProps } from "../../interfaces";
import Badge from "../Badge/Badge";

import styles from "./SectionHeader.module.css";
const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => {
  return (
    <header className={styles.header}>
      <Badge text={badge} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </header>
  );
};

export default SectionHeader;