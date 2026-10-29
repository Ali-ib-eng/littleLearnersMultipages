import { BENEFITS_DATA } from "../../Components/BenefitsSection/benefitsData"
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection"
import { FAQ_DATA } from "../../Components/FaqSection/faqData"
import FaqSection from "../../Components/FaqSection/FaqSection"
import { HERO_DATA } from "../../Components/HeroSection/heroData"
import HeroSection from "../../Components/HeroSection/HeroSection"
import { PAGES_DATA } from "../../Components/PagesSection/pagesData"
import PagesSection from "../../Components/PagesSection/PagesSection"
import { TESTIMONIALS_DATA } from "../../Components/TestimonialsSection/testimonialsData"
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection"

const Home = () => {
    return (
        <div>
            <HeroSection {...HERO_DATA} />
      <BenefitsSection {...BENEFITS_DATA} />
      <PagesSection {...PAGES_DATA} />
      <TestimonialsSection {...TESTIMONIALS_DATA} />
      <FaqSection {...FAQ_DATA} />
        </div>
    )
}

export default Home
