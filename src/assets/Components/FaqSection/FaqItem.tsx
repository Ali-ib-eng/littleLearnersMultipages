import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";
import type { FaqItemProps } from "../../interfaces";
import styles from "./FaqItem.module.css";

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  return (
    <article className={`${styles.item} ${isOpen ? styles.open : ""}`}>
      <button
        type="button"
        className={styles.question}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={styles.icon}>
          {isOpen ? <HiOutlineMinus /> : <HiOutlinePlus />}
        </span>
      </button>

      <div className={styles.answerWrap}>
        <div className={styles.answerInner}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </article>
  );
};

export default FaqItem;