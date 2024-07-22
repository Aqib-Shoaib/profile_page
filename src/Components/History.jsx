import styled from "styled-components";
import HistoryItem from "./HistoryItem";
import { IconBrandReact, IconCodeCircle } from "@tabler/icons-react";

const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #4a4a4a;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const StyledHistory = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 15px;
  padding: 2rem 3rem;
  background: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function History() {
  const Data = {
    heading: "Front-End Intern",
    institute: "Ezitech Institute",
    date: `${MONTHS[new Date(Date.now()).getMonth()]} ${new Date(
      Date.now()
    ).getFullYear()}`,
    work: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  };

  return (
    <StyledHistory>
      <H3>Employment History</H3>
      <HistoryItem icon={<IconCodeCircle stroke={2} />} data={Data} />
      <HistoryItem icon={<IconBrandReact stroke={2} />} data={Data} />
      <HistoryItem icon={<IconCodeCircle stroke={2} />} data={Data} />
      <HistoryItem icon={<IconBrandReact stroke={2} />} data={Data} />
    </StyledHistory>
  );
}

export default History;
