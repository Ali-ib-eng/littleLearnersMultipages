import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import type { ContactInfo } from "./ContactInfoItem";
export const CONTACT_INFO_TEXT={
  badge: "Contact Us",
  title: "Feel Free To Connect With Us",
  description:
    "We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods",
};
export const CONTACT_INFO_ITEMS: ContactInfo[] = [
  { id: 1, icon: FaEnvelope,
    text: "hello@littlelearners.com" 
    },
  { id: 2,icon: FaPhone,
    text:"+91 91813 23 2309" 
    },
  { id: 3, icon: FaLocationDot,
    text: "Somewhere in the World" 
    },
  { id: 4, icon: FaClock,
    text: "Office Hours - 9am - 6 pm"
  },
];