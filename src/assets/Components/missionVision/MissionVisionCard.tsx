
import styles from "./MissionVisionCard.module.css";
import type { MissionVisionCardProps } from "./missionVisionData";

const MissionVisionCard = ({title,description,icon,iconAlt,}:MissionVisionCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
        <img className={styles.icon} src={icon} alt={iconAlt} />
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default MissionVisionCard;