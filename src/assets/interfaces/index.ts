import type { IconType } from "react-icons";

export interface NavItem {
  link: string;
  href: string;
}
export interface NavBarProps {
  navItems: NavItem[];
}
export interface StatItem {
  value: string;
  label: string;
}

export interface StatsCardProps {
  stats: StatItem[];
}

export interface HeroSectionProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  image?:string
  imageAlt: string;
  stats: StatItem[];
}


export interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

export interface BenefitCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export interface BenefitsSectionProps {
  header: SectionHeaderProps;
  benefits: BenefitItem[];
}
export interface PageItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface PageCardProps {
  title: string;
  description: string;
  href: string;
}


export interface PagesSectionProps {
  header: SectionHeaderProps;
  pages: PageItem[];
}
export interface TestimonialItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

export type TestimonialCardProps = Omit<TestimonialItem, "id">;

export interface ArrowButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export interface TestimonialsSectionProps {
  header: SectionHeaderProps;
  testimonials: TestimonialItem[];
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterColumnItem {
  id: string;
  title: string;
  links: FooterLinkItem[];
}

export type FooterColumnProps = Omit<FooterColumnItem, "id">;

export interface FooterContactItem {
  id: string;
  icon: IconType;
  text: string;
  href?: string;
}

export type ContactItemProps = Omit<FooterContactItem, "id">;

export interface FooterSocialItem {
  id: string;
  label: string;
  icon: IconType;
  href: string;
}

export interface FooterProps {
  logo: string;
  description: string;
  contacts: FooterContactItem[];
  columns: FooterColumnItem[];
  legalLinks: FooterLinkItem[];
  socials: FooterSocialItem[];
  copyright: string;
}
export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export interface FaqSectionProps {
  header: SectionHeaderProps; // انا عرفتو من قبل
  faqs: FaqEntry[];
}
