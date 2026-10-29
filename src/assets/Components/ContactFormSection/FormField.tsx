import type { ChangeEvent } from "react";
import { HiChevronDown } from "react-icons/hi2";
import styles from "./FormField.module.css";
export interface FormValues {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  studentAge: string;
  program: string;
  message: string;
}

export interface FieldConfig {
  name: keyof FormValues;
  label: string;
  placeholder: string;
  kind: "input" |"select"|"textarea";
  type?: string;          //input (text, email, tel, number)
  options?: string[];     //select
  fullWidth?: boolean;  
}
//define datatype
type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
interface FormFieldProps {
  field: FieldConfig;
  value: string;
  onChange: (event: ChangeEvent<Control>) => void;
}

  const FormField = ({ field, value, onChange }: FormFieldProps) => {
  const { name, label, placeholder, kind, type = "text", options = [], fullWidth } = field;

  return (
    <div className={`${styles.field} ${fullWidth?styles.full :""}`}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      {kind === "input" && (
        <input
          className={styles.control}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      )}

      {kind === "textarea" && (
        <textarea
          className={`${styles.control} ${styles.textarea}`}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      )}

      {kind === "select" && (
        <div className={styles.selectWrap}>
          <select
            className={`${styles.control} ${styles.select} ${value === "" ? styles.empty : ""}`}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <HiChevronDown className={styles.chevron} />
        </div>
      )}
    </div>
  );
};
export default FormField;