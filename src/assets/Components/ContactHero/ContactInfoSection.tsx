import Badge from "../Badge/Badge";
import ContactInfoItem from "./ContactInfoItem";
import type { ContactInfo } from "./ContactInfoItem";
import styles from "./ContactInfoSection.module.css";

interface ContactInfoSectionProps {
  badge: string;
  title: string;
  description: string;
  decoration: string;
  items: ContactInfo[];
}

const ContactInfoSection = ({badge,title,description,decoration,items}:ContactInfoSectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <img className={styles.decoration} src={decoration} alt="decorationImage" />
        <div className={styles.heading}>
          <Badge text={badge} />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.description}>{description}</p>
          <div className={styles.items}>
            {items.map(({ id, ...item }) => (
              <ContactInfoItem key={id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;