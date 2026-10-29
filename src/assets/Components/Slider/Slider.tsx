import { Fragment, useEffect, useState } from "react";
import type { ReactNode } from "react";
import ArrowButton from "../ArrowButton/ArrowButton";
import styles from "./Slider.module.css";

const MOBILE_BREAKPOINT = 992;
const DESKTOP_VISIBLE = 3;

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  variant?: "sides" | "bottom"; 
  footerStart?: ReactNode; 
}

const Slider = <T extends { id: string | number }>({
  items,
  renderItem,
  variant = "sides",
  footerStart,
}: SliderProps<T>) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const total = items.length;
  const visibleCount = Math.min(isMobile ? 1 : DESKTOP_VISIBLE, total);
  const visibleItems = Array.from(
    { length: visibleCount },
    (_, i) => items[(current + i) % total],
  );

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  const hasArrows = total > 1;

  const cards = (
    <div className={styles.cards}>
      {visibleItems.map((item) => (
        <Fragment key={item.id}>{renderItem(item)}</Fragment>
      ))}
    </div>
  );

  if (variant === "bottom") {
    return (
      <div className={styles.bottom}>
        {cards}
        <div className={styles.footer}>
          {footerStart}
          {hasArrows && (
            <div className={styles.arrows}>
              <ArrowButton direction="prev" onClick={prev} />
              <ArrowButton direction="next" onClick={next} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sides}>
      {hasArrows && (
        <div className={styles.prev}>
          <ArrowButton direction="prev" onClick={prev} />
        </div>
      )}
      {cards}
      {hasArrows && (
        <div className={styles.next}>
          <ArrowButton direction="next" onClick={next} />
        </div>
      )}
    </div>
  );
};

export default Slider;