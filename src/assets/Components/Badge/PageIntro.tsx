import Badge from "../Badge/Badge";
import styles from "./PageIntro.module.css";

interface PageIntroProps {
  badge: string;
  title: string;
  description: string;
  decoration:string;
}

const PageIntro = ({ badge, title, description,decoration }: PageIntroProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <img className={styles.decoration} src={decoration} alt="cubeShape" />

        <div className={styles.heading}>
          <Badge text={badge} />
          <h1 className={styles.title}>{title}</h1>
        </div>

        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default PageIntro;