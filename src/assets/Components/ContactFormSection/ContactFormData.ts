import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import type { SocialLink } from "./ContactFormSection";
import type { FieldConfig } from "./FormField";



export const CONTACT_HEADER = {
  badge: "Contact Form",
  title: "Student Information",
  description:
    "If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs",
};

export const SOCIALS: SocialLink[] = [
  { id: 1, label: "Facebook", href: "https://www.facebook.com", icon: FaFacebook },
  { id: 2, label: "Twitter", href: "https://www.Twitter.com", icon: FaTwitter },
  { id: 3, label: "LinkedIn", href: "https://www.LinkedIn.com", icon: FaLinkedin },
];

export const FORM_FIELDS: FieldConfig[] = [
  { name: "parentName", label: "Parent Name",

    placeholder: "Enter Parent Name",
     kind: "input"
     },
  { name: "email",
     label: "Email Address",

     placeholder: "Enter Email Address",

      kind: "input",
       type: "email" },

  { name: "phone",
     label: "Phone Number",

     placeholder: "Enter Phone Number",
      kind: "input", type: "tel" 
    },
  { name: "studentName",
     label: "Student Name",

     placeholder: "Enter Student Name",
      kind: "input" },
  { name: "studentAge",
     label: "Student Age",
     placeholder: "Enter Student Age",
      kind: "input",
       type: "number" },
  {
    name: "program",
    label: "Program of Intrest",
    placeholder: "Select Program",
    kind: "select",
    options: ["Nursery", "Pre - Kindergartens", "Kindergarten"],
  },
  { name: "message", label: "Message", placeholder: "Enter your Message", kind: "textarea", fullWidth: true },
];