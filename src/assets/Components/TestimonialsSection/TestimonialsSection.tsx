import type { TestimonialsSectionProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";
import Slider from "../Slider/Slider";
import TestimonialCard from "./TestimonialCard";
import styles from "./TestimonialsSection.module.css";

const TestimonialsSection = ({ header, testimonials }: TestimonialsSectionProps) => {
  return (
    <section className={styles.section}>
      <SectionHeader {...header} />
      <Slider
        items={testimonials}
        renderItem={(testimonial) => <TestimonialCard {...testimonial} />}
      />
    </section>
  );
};

export default TestimonialsSection;