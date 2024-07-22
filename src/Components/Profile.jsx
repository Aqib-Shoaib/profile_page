import styled from "styled-components";
import AboutMe from "./AboutMe";
import Bio from "./Bio";
import ContactBox from "./ContactBox";
import ExperienceBox from "./ExperienceBox";
import OverviewRow from "./OverviewRow";

const StyledProfile = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  background-color: #f8f9fa;
  justify-content: center;
`;

const Section = styled.div`
  flex: 1 1 45%;
`;
const Sect = styled.div`
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Profile() {
  return (
    <StyledProfile>
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <OverviewRow />
      </Section>
      <Section>
        <Bio />
      </Section>
      <Sect>
        <ExperienceBox />
        <ContactBox />
      </Sect>
    </StyledProfile>
  );
}

export default Profile;
