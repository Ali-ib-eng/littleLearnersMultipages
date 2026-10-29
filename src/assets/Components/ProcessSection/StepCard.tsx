import styles from "./StepCard.module.css";

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

interface StepCardProps extends Omit<ProcessStep, "id"> {
  number: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <article className={styles.step}>
      <div className={styles.number}>{number}</div>
      <span className={styles.line} />

      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default StepCard;