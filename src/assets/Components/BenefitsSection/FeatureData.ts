
import {PiBookOpenFill,PiChartBarFill,PiPuzzlePieceFill,PiPaintBrushFill,PiSunFill,PiStarFill} from "react-icons/pi";
import type { BenefitsSectionProps } from "../../interfaces";
export const FEATURES_DATA:BenefitsSectionProps = {
  header:{
    badge: "Our Features",
    title: "Our Special Features",
    description:
      "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!",
  },
  benefits: [
    {
      id: "Thematic",
      icon: PiBookOpenFill,
      title: "Thematic Learning",
      description:
        "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    },
    {
      id: "STEAM",
      icon: PiChartBarFill,
      title: "STEAM Education",
      description:
        "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    },
    {
      id: "Language",
      icon: PiPuzzlePieceFill,
      title: "Language Immersion",
      description:
        "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    },
    {
      id:"Art" ,
      icon: PiPaintBrushFill,
      title: "Art and Creativity",
      description:
        "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    },
    {
      id: "Outdoor",
      icon: PiSunFill,
      title: "Outdoor Education",
      description:
        "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    },
    {
      id: "Play",
      icon: PiStarFill,
      title: "Play-Based Learning",
      description:
        "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    },
  ],
};