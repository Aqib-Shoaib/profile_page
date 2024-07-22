import styled from "styled-components";
import Prj from "./Prj";

const StyledPrj = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1.5rem;
  margin: 1rem 4rem;
`;

function Projects() {
  const FAKE_DATA = {
    title: "Social Banners",
    client: "Aqib Shoaib",
    totalPrice: "123k",
    paidPrice: "12k",
    startDate: "12/12/12",
    deadline: "12/12/13",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit Reprehenderit dignissimos ad id, velit ratione molestias!",
    timeIndays: 30,
    timeSpentInHours: 130,
    totalTasks: 195,
    completedTasks: 140,
    totalMembers: 32,
    comments: 123,
  };
  return (
    <StyledPrj>
      <Prj data={FAKE_DATA} />
      <Prj data={FAKE_DATA} />
      <Prj data={FAKE_DATA} />
      <Prj data={FAKE_DATA} />
      <Prj data={FAKE_DATA} />
      <Prj data={FAKE_DATA} />
    </StyledPrj>
  );
}

export default Projects;
