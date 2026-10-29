import PageIntro from "../../Components/Badge/PageIntro"
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection"

import {  FEATURES_DATA } from "../../Components/BenefitsSection/FeatureData"
import { GALLERY_HEADER, GALLERY_ROOMS } from "../../Components/GallerySection/galleryData"
import GallerySection from "../../Components/GallerySection/GallerySection"
import { LEARN_HEADER, SUBJECTS } from "../../Components/LearnSection/learnData"
import LearnSection from "../../Components/LearnSection/LearnSection"

const Academics = () => {
    return (
        <>
            <PageIntro
        badge="Academics"
        title="Nurturing Young Minds for Success"
        description="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
        decoration="./img/cubes.png"
      />
      <BenefitsSection {...FEATURES_DATA} />
      <LearnSection header={LEARN_HEADER} subjects={SUBJECTS} />
      <GallerySection header={GALLERY_HEADER} rooms={GALLERY_ROOMS} />
        </>
    )
}

export default Academics
