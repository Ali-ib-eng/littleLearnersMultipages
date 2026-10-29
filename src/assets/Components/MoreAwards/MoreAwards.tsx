import styles from "./MoreAwards.module.css";

interface MoreAwardsProps {
  text: string;
}

const MoreAwards = ({ text }: MoreAwardsProps) => {
  return <p className={styles.text}>{text}</p>;
};

export default MoreAwards;