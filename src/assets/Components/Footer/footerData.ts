import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import type { FooterProps } from "../../interfaces";

export const FOOTER_DATA: FooterProps = {
  logo:"./img/Logo.png",
  description:
    "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  contacts: [
    {
      id: "email",
      icon: FaEnvelope,
      text: "hello@littlelearners.com",
      href: "mailto:hello@littlelearners.com",
    },
    {
      id: "phone",
      icon: FaPhone,
      text: "+91 91813 23 2309",
      href: "tel:+919181323309",
    },
    {
      id: "address",
      icon: FaLocationDot,
      text: "Somewhere in the World",
    },
  ],
  columns: [
    {
      id: "home",
      title: "Home",
      links: [
        { label: "Features", href: "#features" },
        { label: "Our Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      id: "about",
      title: "About Us",
      links: [
        { label: "Our Mission", href: "#mission" },
        { label: "Our Vission", href: "#vision" },
        { label: "Awards and Recognitions", href: "#awards" },
        { label: "History", href: "#history" },
        { label: "Teachers", href: "#teachers" },
      ],
    },
    {
      id: "academics",
      title: "Academics",
      links: [
        { label: "Special Features", href: "#special-features" },
        { label: "Gallery", href: "#gallery" },
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      links: [
        { label: "Information", href: "#information" },
        { label: "Map & Direction", href: "#map" },
      ],
    },
  ],
  legalLinks: [
    { label: "Terms of Service", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Cookie Policy", href: "#cookies" },
  ],
  socials: [
    { id: "facebook", label: "Facebook", icon: FaFacebook, href: "https://facebook.com" },
    { id: "twitter", label: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
    { id: "linkedin", label: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
  ],
  copyright: "Copyright © [2023] Little Learners Academy. All rights reserved.",
};