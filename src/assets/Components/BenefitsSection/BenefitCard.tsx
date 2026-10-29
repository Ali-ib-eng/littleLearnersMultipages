import type { BenefitCardProps } from "../../interfaces";
import styles from "./BenefitCard.module.css";

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <article className={styles.card}>
      <span className={styles.iconBox}>
        <Icon aria-hidden="true" />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default BenefitCard;