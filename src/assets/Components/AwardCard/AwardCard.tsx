import type { IconType } from "react-icons";
import styles from "./AwardCard.module.css";

export interface AwardCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export interface Award extends AwardCardProps {
  id: number;
}

const AwardCard = ({ icon: Icon, title, description }: AwardCardProps) => {
  return (
    <article className={styles.card}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default AwardCard;