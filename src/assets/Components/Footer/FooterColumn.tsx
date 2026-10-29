import type { FooterColumnProps } from "../../interfaces";
import styles from "./FooterColumn.module.css";

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className={styles.column}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className={styles.link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;