import { FaStar } from "react-icons/fa";
import type { TestimonialCardProps } from "../../interfaces";
import styles from "./TestimonialCard.module.css";

const MAX_RATING = 5;

const TestimonialCard = ({ name, avatar, rating, text }: TestimonialCardProps) => {
  return (
    <article className={styles.card}>
      <img className={styles.avatar} src={avatar} alt="avatarProfile" />
      <h3 className={styles.name}>{name}</h3>

      <div className={styles.stars}>
        {Array.from({ length: MAX_RATING }, (_, i) => (
          <FaStar key={i} className={i < rating ? styles.starOn : styles.starOff} />
        ))}
      </div>

      <p className={styles.text}>{text}</p>
    </article>
  );
};

export default TestimonialCard;