
export interface MissionVisionCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}
export const missionVisionCards: MissionVisionCardProps[] = [
  {
    id: 1,
    title: "Mission",
    icon: "/icons/flagIcon.png",
    iconAlt: "Mountain with a flag",
    description:
      "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
  },
  {
    id: 2,
    title: "Vision",
    icon: "/icons/scopIcon.png",
    iconAlt: "Binoculars",
    description:
      "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
  },
];