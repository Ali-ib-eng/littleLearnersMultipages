
import styles from "./TimelineItem.module.css";

export interface HistoryItem {
  id: number;
  year: string;
  title: string;
  description: string;
  dottimg:string;
  dottimgAlt:string;
}

type TimelineItemProps = Omit<HistoryItem, "id">;

const TimelineItem = ({ year, title, description,dottimg }: TimelineItemProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.node}>
        <span className={styles.ring} />
        <span className={styles.connector} />
        <span className={styles.ring} />
      </div>

      <div className={styles.year}>
        <img className={styles.dots} src={dottimg} alt="dottimg" />
        <span className={styles.yearText}>{year}</span>
      </div>

      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default TimelineItem;