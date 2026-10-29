import type { CSSProperties } from "react";
import styles from "./FeeCard.module.css";

export interface FeeCardData {
  title?: string;     
  columns?: string[];
  rows: string[][];
}

const FeeCard = ({ title, columns, rows }: FeeCardData) => {
  const columnsCount = columns ? columns.length : rows[0].length;
  const gridStyle = { "--cols": columnsCount } as CSSProperties;

  return (
    <div className={styles.card}>
      {title && <h3 className={styles.banner}>{title}</h3>}

      <div className={styles.scroll}>
        <div className={styles.table}>
          {columns && (
            <div className={`${styles.row} ${styles.head}`} style={gridStyle}>
              {columns.map((column,index) => (
                <span key={index} className={styles.cell}>
                  {column}
                </span>
              ))}
            </div>
          )}

          <div className={styles.body}>
            {rows.map((row) => (
              <div key={row[0]} className={styles.row} style={gridStyle}>
                {row.map((cell, index) => (
                  <span key={index} className={styles.cell}>
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeCard;