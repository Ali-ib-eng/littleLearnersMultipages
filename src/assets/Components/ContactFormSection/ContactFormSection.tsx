import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { IconType } from "react-icons";
import type { SectionHeaderProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./ContactFormSection.module.css";
import type { FieldConfig, FormValues } from "./FormField";
import FormField from "./FormField";
export interface SocialLink {
  id: number;
  label: string;
  href: string;
  icon: IconType;
}

interface ContactFormSectionProps {
  header: SectionHeaderProps;
  socials: SocialLink[];
  fields: FieldConfig[];
}

const INITIAL_VALUES: FormValues = {
  parentName: "",
  email: "",
  phone: "",
  studentName: "",
  studentAge: "",
  program: "",
  message: "",
};

const ContactFormSection = ({ header, socials, fields }: ContactFormSectionProps) => {
  const [form, setForm] = useState<FormValues>(INITIAL_VALUES);
  const handleChange=(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name,value} = event.target;
    setForm({...form,[name]:value});
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form); 
    setForm(INITIAL_VALUES);
  };

  return (
    <section className={styles.section}>
      <SectionHeader {...header} />
      <div className={styles.card}>
        <div className={styles.socials}>
          {socials.map(({ id, label, href, icon: Icon }) => (
            <a key={id} className={styles.social} href={href} aria-label={label} target="_blank">
              <Icon />
            </a>
          ))}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {fields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={form[field.name]}
              onChange={handleChange}
            />
          ))}

          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;