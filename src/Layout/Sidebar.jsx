import styled from "styled-components";

const StyledSidebar = styled.div`
  background-color: #f1f1f1;
  border-radius: 10px;
  grid-row: span 2;
  height: 100vh;
  margin-right: 1rem;
`;

function Sidebar() {
  return <StyledSidebar>sidebar</StyledSidebar>;
}
export default Sidebar;
