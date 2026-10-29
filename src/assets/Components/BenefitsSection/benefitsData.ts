import { FaCrown } from "react-icons/fa";
import { TbFaceMaskFilled } from "react-icons/tb";
import {FaFlag,FaGraduationCap,FaLifeRing,FaUserGroup}from "react-icons/fa6";
import type { BenefitsSectionProps } from "../../interfaces";
export const BENEFITS_DATA: BenefitsSectionProps = {
  header: {
    badge: "Children Deserve Bright Future",
    title: "Our Benefits",
    description:
      "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.",
  },
  benefits: [
    {
      id: "holistic",
      icon: FaGraduationCap,
      title: "Holistic Learning Approach",
      description:
        "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    },
    {
      id: "educators",
      icon: FaCrown,
      title: "Experienced Educators",
      description:
        "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    },
    {
      id: "environment",
      icon: TbFaceMaskFilled,
      title: "Nurturing Environment",
      description:
        "We prioritize safety and provide a warm and caring atmosphere for every child.",
    },
    {
      id:"play",
      icon: FaFlag,
      title: "Play-Based Learning",
      description:
        "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    },
    {
      id: "attention",
      icon: FaLifeRing,
      title: "Individualized Attention",
      description:
        "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    },
    {
      id: "parents",
      icon: FaUserGroup,
      title: "Parent Involvement",
      description:
        "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    },
  ],
};