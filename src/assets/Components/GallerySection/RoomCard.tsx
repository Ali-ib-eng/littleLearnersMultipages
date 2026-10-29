import { useEffect, useState } from "react";
import ArrowButton from "../ArrowButton/ArrowButton";
import styles from "./RoomCard.module.css";

const MOBILE_BREAKPOINT = 768;
const DESKTOP_VISIBLE = 4;

export interface GalleryRoom {
  id: number;
  title: string;
  description: string;
  images: string[];
}

type RoomCardProps = Omit<GalleryRoom, "id">;

const RoomCard = ({ title, description, images }: RoomCardProps) => {
  const [start, setStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const total = images.length;
  const visibleCount = Math.min(isMobile ? 1 : DESKTOP_VISIBLE, total);
  const visibleImages = Array.from(
    { length: visibleCount },
    (_, i) => images[(start + i) % total],
  );

  const next = () => setStart((start + 1) % total);
  const prev = () => setStart((start - 1 + total) % total);

  return (
    <article className={styles.room}>
      <div className={styles.images}>
        {visibleImages.map((src,index) => (
          <img key={index} className={styles.image} src={src} alt={title} />
        ))}
      </div>

      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>

        {total > 1 && (
          <div className={styles.arrows}>
            <ArrowButton direction="prev" onClick={prev} />
            <ArrowButton direction="next" onClick={next} />
          </div>
        )}

        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default RoomCard;