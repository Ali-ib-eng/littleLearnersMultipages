import { AWARDS, AWARDS_HEADER } from "../../Components/AwardsSection/awardsData";
import AwardsSection from "../../Components/AwardsSection/AwardsSection";
import PageIntro from "../../Components/Badge/PageIntro";
import { HISTORY_HEADER, HISTORY_ITEMS } from "../../Components/HistorySection/historyData";
import HistorySection from "../../Components/HistorySection/HistorySection";
import OurMissionAboutSection from "../../Components/missionVision/OurMissionAboutSection";
import { TEAM_HEADER, TEAM_MEMBERS } from "../../Components/TeamSection/teamData";
import TeamSection from "../../Components/TeamSection/TeamSection";
const About = () => {
  return (
    
      <>
      <PageIntro
        badge="Overview"
        title="Welcome to Little Learners Academy"
        description="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
        decoration="./img/cubes.png"
      />
    <OurMissionAboutSection badge="Mission & Visions"
            title="Our Mission & Visions"
            description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
            />
            <AwardsSection header={AWARDS_HEADER} awards={AWARDS} moreText="8 More Awards" />
      <HistorySection header={HISTORY_HEADER} items={HISTORY_ITEMS} />
      <TeamSection header={TEAM_HEADER} members={TEAM_MEMBERS} />
      </>
      
  );
};

export default About;