import PageIntro from "../../Components/Badge/PageIntro"
import BenefitsSection from "../../Components/BenefitsSection/BenefitsSection"
import { EVENTS, EVENTS_HEADER } from "../../Components/EventsSection/EventsSection"
import { EXTRACURRICULAR_DATA } from "../../Components/Extracurricular/ExtracurricularData"
import LearnSection from "../../Components/LearnSection/LearnSection"
import { Support_DATA } from "../../Components/StudentSupport/StudentSupport"

const Student = () => {
    return (
        <>
            <PageIntro badge="Enriching Student Life"
            title="Embracing Learning with Discovery and Joy"
            description="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
            decoration="./img/cubes.png"
            />
            <BenefitsSection {...EXTRACURRICULAR_DATA}/>
            <LearnSection header={EVENTS_HEADER} subjects={EVENTS} />
            <BenefitsSection {...Support_DATA}/>
        </>
    )
}

export default Student
