/* eslint-disable react/prop-types */

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #d1d5db; /* bg-gray-300 */
  border-radius: 9999px; /* rounded-full */
  overflow: hidden;
  height: 1rem;
  position: relative;
  font-size: 0.75rem; /* text-xs */
`;

const Filler = styled.div`
  height: 100%;
  background-color: #2563eb; /* bg-blue-600 */
  text-align: center;
  line-height: 1rem; /* leading-[1rem] */
  border-radius: inherit;
  transition: width 0.5s ease-in-out; /* transition-all duration-500 */
  width: ${(props) => `${props.percentage}%`};
`;

const Label = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.percentage > 50 ? "white" : "black")};
`;

const ProgressBar = ({ completedTasks, totalTasks }) => {
  const percentage = (completedTasks / totalTasks) * 100;

  return (
    <Container>
      <Filler percentage={percentage} />
      <Label percentage={percentage}>{percentage.toFixed(0)}%</Label>
    </Container>
  );
};

export default ProgressBar;
