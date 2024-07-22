import OverviewRow from "../Components/OverviewRow";
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
      <OverviewRow />
      <Tab />
    </StyledMain>
  );
}

export default Main;
