import type { TestimonialsSectionProps } from "../../interfaces";
export const TESTIMONIALS_DATA: TestimonialsSectionProps = {
  header: {
    badge: "Their Happy Words 🤗",
    title: "Our Testimonials",
    description:
      "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.",
  },
  testimonials: [
    {
      id: "jennifer",
      name: "Jennifer B",
      avatar:"./img/JenniferB.png",
      rating: 5,
      text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      id: "david",
      name: "David K",
      avatar: "./img/DavidK.png",
      rating: 5,
      text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      id: "emily",
      name: "Emily L",
      avatar: "./img/EmilyL.png",
      rating: 5,
      text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
  ],
};