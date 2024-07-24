import styled from "styled-components";

const Btn = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  background-color: #12afec;
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
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &:hover {
    box-shadow: 2px 2px 6px #441960, -2px -2px 6px #441960;
  }
`;
const Btns = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function OtherBtns() {
  return (
    <Btns>
      <Btn>total task</Btn>
      <Btn>total projects</Btn>
      <Btn>completed projects</Btn>
      <Btn>onGoing projects</Btn>
    </Btns>
  );
}

export default OtherBtns;
