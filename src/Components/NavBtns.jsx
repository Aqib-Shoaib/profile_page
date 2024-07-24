import styled from "styled-components";

const Btn = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  background-color: #685dd8;
  color: #fff;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 5px #441960;
  color: #fff;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 6px #441960, -2px -2px 6px #441960;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Btns = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function NavBtns() {
  return (
    <Btns>
      <Btn>Profile</Btn>
      <Btn>History</Btn>
      <Btn>Certificates</Btn>
      <Btn>Contact</Btn>
    </Btns>
  );
}

export default NavBtns;
