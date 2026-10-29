import PageIntro from "../../Components/Badge/PageIntro"
import { FEE_HEADER, FEE_TABLES } from "../../Components/FeeSection/feeData"
import FeeSection from "../../Components/FeeSection/FeeSection"
import { PROCESS_HEADER, PROCESS_STEPS } from "../../Components/ProcessSection/processData"
import ProcessSection from "../../Components/ProcessSection/ProcessSection"

const Admissions = () => {
    return (
        <>
            <PageIntro badge="Admission"
            title="Join Our Family of Young Learners"
            description="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
            decoration="./img/cubes.png"
            />
            <ProcessSection header={PROCESS_HEADER} steps={PROCESS_STEPS}/>
            <FeeSection header={FEE_HEADER} tables={FEE_TABLES} />
        </>
    )
}

export default Admissions
