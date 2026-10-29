import type { IconType } from "react-icons";
import styles from "./ContactInfoItem.module.css";

export interface ContactInfo {
  id: number;
  icon: IconType;
  text: string;
}

type ContactInfoItemProps = Omit<ContactInfo, "id">;

const ContactInfoItem = ({ icon: Icon, text }: ContactInfoItemProps) => {
  return (
    <div className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default ContactInfoItem;