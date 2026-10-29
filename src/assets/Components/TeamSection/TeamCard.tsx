import { HiEnvelope } from "react-icons/hi2";
import styles from "./TeamCard.module.css";

export interface TeamMember {
  id: number;
  name: string;
  avatar: string;
  qualification: string;
  bio: string;
  email: string;
}

type TeamCardProps = Omit<TeamMember, "id">;

const TeamCard = ({ name, avatar, qualification, bio, email }: TeamCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <img className={styles.avatar} src={avatar} alt={name} />
        <h3 className={styles.name}>{name}</h3>
        <a
          className={styles.mail}
          href={`mailto:${email}`}
          aria-label={`Email ${name}`}
        >
          <HiEnvelope />
        </a>
      </div>

      <div className={styles.info}>
        <p className={styles.qualification}>Qualification: {qualification}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </article>
  );
};

export default TeamCard;