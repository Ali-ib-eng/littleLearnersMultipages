import { FaBolt, FaChartColumn, FaChartPie } from "react-icons/fa6";
import type { Award } from "../AwardCard/AwardCard";

export const AWARDS_HEADER = {
  badge: "Our Achievements",
  title: "Our Awards and Recognitions",
  description:
    "Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.",
};

export const AWARDS: Award[] = [
  {
    id: 1,
    icon: FaChartPie,
    title: "Outstanding Early Childhood Education Award",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    id: 2,
    icon: FaChartColumn,
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    id: 3,
    icon: FaBolt,
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
];