import type { StatsCardProps } from "../../interfaces";
import styles from "./StatsCard.module.css";
const StatsCard = ({ stats }: StatsCardProps) => {
  return (
    <ul className={styles.card}>
      {stats.map(({ value, label }) => (
        <li key={label} className={styles.stat}>
          <strong className={styles.value}>{value}</strong>
          <span className={styles.label}>{label}</span>
        </li>
      ))}
    </ul>
  );
};

export default StatsCard;
