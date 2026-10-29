import { CONTACT_HEADER, FORM_FIELDS, SOCIALS } from "../../Components/ContactFormSection/ContactFormData"
import ContactFormSection from "../../Components/ContactFormSection/ContactFormSection"
import { CONTACT_INFO_ITEMS, CONTACT_INFO_TEXT } from "../../Components/ContactHero/contactInfoData"
import ContactInfoSection from "../../Components/ContactHero/ContactInfoSection"

const Contacts = () => {
    return (
        <>
                <ContactInfoSection {...CONTACT_INFO_TEXT}
                decoration="./img/cubes.png"
                items={CONTACT_INFO_ITEMS}
                />


            <ContactFormSection 
            header={CONTACT_HEADER}
             socials={SOCIALS}
              fields={FORM_FIELDS} />
              
        </>
    )
}

export default Contacts
