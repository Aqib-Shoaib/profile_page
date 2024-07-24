import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import ProfileBanner from "../Components/ProfileBanner";
import styled from "styled-components";
import NavBtns from "../Components/NavBtns";
import OtherBtns from "../Components/OtherBtns";

const StyledMain = styled.main`
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  display: grid;
  grid-template-columns: 30vw 65vw;
`;
const Div = styled.section`
  margin: 3rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

function Main() {
  return (
    <StyledMain>
      <ProfileBanner />
      <AboutMe />
      <Div>
        <NavBtns />
        <OtherBtns />
        <Projects />
      </Div>
    </StyledMain>
  );
}

export default Main;
