import type { ContactItemProps } from "../../interfaces";
import styles from "./ContactItem.module.css";

const ContactItem = ({ icon: Icon, text, href }: ContactItemProps) => {
  const content = (
    <>
      <span className={styles.iconBox}>
        <Icon aria-hidden="true" />
      </span>
      {text}
    </>
  );

  return (
    <li>
      {href ? (
        <a href={href} className={styles.content}>
          {content}
        </a>
      ) : (
        <span className={styles.content}>{content}</span>
      )}
    </li>
  );
};

export default ContactItem;