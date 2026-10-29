import type { FeeCardData } from "./FeeCard";

export const FEE_HEADER = {
  badge: "Our Features",
  title: "Fee Structure",
  description:
    "Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.",
};

export const FEE_TABLES: FeeCardData[] = [
  {
    columns: ["Program", "Age Group", "Annual Tuition", "Registration Fee", "Activity Fee"],
    rows: [
      ["Nursery", "2 - 3 Years", "$1,686", "$162", "$12"],
      ["Pre - Kindergartens", "3 - 4 Years", "$2,686", "$220", "$16"],
      ["Kindergarten", "4 - 5 Years", "$3,686", "$340", "$20"],
    ],
  },
  {
    title: "Additional Services",
    rows: [
      ["Before and After-School Care", "$120 / per month"],
      ["Language Immersion Program", "$60 / per semester"],
      ["Transportation (optional)", "$80 / per month"],
    ],
  },
];