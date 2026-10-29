import { useState } from "react";
import type { FaqSectionProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";
import FaqItem from "./FaqItem";
import styles from "./FaqSection.module.css";

const FaqSection = ({ header, faqs }: FaqSectionProps) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id   ?? null);

  const toggle = (id: string) => setOpenId(openId === id ? null:id);
  const half = Math.ceil(faqs.length/2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];
  return (
    <section id="faq" className={styles.section}>
      <SectionHeader {...header} />

      <div className={styles.columns}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            {column.map(({id,question,answer}) => (
              <FaqItem
                key={id}
                question={question}
                answer={answer}
                isOpen={openId === id}
                onToggle={()=>toggle(id)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;