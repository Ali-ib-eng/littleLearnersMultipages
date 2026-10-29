import type { FooterProps } from "../../interfaces";
import ContactItem from "./ContactItem";
import FooterColumn from "./FooterColumn";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = ({logo,description,contacts,columns,legalLinks,socials,copyright,}: FooterProps) => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <img className={styles.logo} src={logo} alt="Little Learners" />
          <p className={styles.description}>{description}</p>
          <ul className={styles.contacts}>
            {contacts.map(({ id, ...contact }) => (
              <ContactItem key={id} {...contact} />
            ))}
          </ul>
        </div>

        <div className={styles.columns}>
          {columns.map(({ id, ...column }) => (
            <FooterColumn key={id} {...column} />
          ))}
        </div>
      </div>

      <div className={styles.bar}>
        <ul className={styles.legal}>
          {legalLinks.map(({ label, href }) => (
            <li key={label} className={styles.legalItem}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <ul className={styles.socials}>
          {socials.map(({ id, label, icon: Icon, href }) => (
            <li key={id}>
              <a
                href={href}
                className={styles.social}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.copyright}>{copyright}</p>
    </footer>
  );
};

export default Footer;