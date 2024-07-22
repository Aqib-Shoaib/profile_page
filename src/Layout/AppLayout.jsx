import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledApp = styled.div`
  background-color: #f8f7fa;
  height: 100%;
`;

function AppLayout() {
  return (
    <StyledApp>
      <Outlet />
    </StyledApp>
  );
}

export default AppLayout;
