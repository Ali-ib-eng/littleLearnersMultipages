import type { Subject } from "./SubjectCard";

export const LEARN_HEADER = {
  badge: "Our Features",
  title: "What Students Learn",
  description:
    "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include",
};
export const SUBJECTS: Subject[] = [
  {
    id: 1,
    title: "Language Arts",
    description: "Reading, writing, storytelling, and communication skills.",
    image: "./img/Language.png",
  },
  {
    id: 2,
    title: "Mathematics",
    description: "Number sense, basic operations, problem-solving, and logic.",
    image: "./img/Mathematics.png",
  },
  {
    id: 3,
    title: "Science",
    description:
      "Exploring the natural world through hands-on experiments and investigations.",
    image: "./img/Science.png",
  },
  {
    id: 4,
    title: "Social Studies",
    description:
      "Cultivating an understanding of diverse cultures and communities.",
    image: "./img/Social.png",
  },
  {
    id: 5,
    title: "Arts and Crafts",
    description:
      "Encouraging creativity through various art forms and crafts.",
    image: "./img/Arts.png",
  },
  {
    id: 6,
    title: "Physical Education",
    description: "Promoting physical fitness, coordination, and teamwork.",
    image: "./img/Physical.png",
  },
];