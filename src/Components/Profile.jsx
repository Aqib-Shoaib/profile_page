import styled from "styled-components";
import AboutMe from "./AboutMe";
import Bio from "./Bio";
import ContactBox from "./ContactBox";
import ExperienceBox from "./ExperienceBox";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

function Profile() {
  return (
    <StyledProfile>
      <AboutMe />
      <Bio />
      <ContactBox />
      <ExperienceBox />
    </StyledProfile>
  );
}

export default Profile;
