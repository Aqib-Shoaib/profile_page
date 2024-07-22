import styled from "styled-components";

const StyledHeader = styled.div`
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2), -3px -3px 3px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  height: 9vh;
`;

function Header() {
  return <StyledHeader>header</StyledHeader>;
}
export default Header;
