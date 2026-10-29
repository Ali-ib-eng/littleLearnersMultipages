import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import type { ArrowButtonProps } from "../../interfaces";
import styles from "./ArrowButton.module.css";

const ArrowButton = ({direction,onClick}:ArrowButtonProps) => {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      className={styles.arrow}
      onClick={onClick}
      aria-label={isPrev ? "Previous" : "Next"}
    >
      {isPrev?<HiArrowLeft /> :<HiArrowRight />}
    </button>
  );
};

export default ArrowButton;