import type { ProcessStep } from "./StepCard";

export const PROCESS_HEADER = {
  badge: "Process",
  title: "Admission Process",
  description:
    "Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school",
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Inquiry",
    description:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
  },
  {
    id: 2,
    title: "School Tour",
    description:
      "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
  },
  {
    id: 3,
    title: "Application Form",
    description:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    id: 4,
    title: "Parent Interview",
    description:
      "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
  },
  {
    id: 5,
    title: "Student Assessment",
    description:
      "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
  },
  {
    id: 6,
    title: "Acceptance",
    description:
      "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
  },
];