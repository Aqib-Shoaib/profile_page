import ProfileBanner from "../Components/ProfileBanner";
import styled from "styled-components";
import Tab from "../Components/Tab";

const StyledMain = styled.main`
  padding: 2rem;
`;

function Main() {
  return (
    <StyledMain>
      <ProfileBanner />
      <Tab />
    </StyledMain>
  );
}

export default Main;
