import styles from "./SubjectCard.module.css";

export interface Subject {
  id: number;
  title: string;
  description: string;
  image: string;
}

type SubjectCardProps = Omit<Subject, "id">;

const SubjectCard = ({ title, description, image }: SubjectCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default SubjectCard;