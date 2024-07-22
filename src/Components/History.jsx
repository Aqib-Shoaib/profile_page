import styled from "styled-components";
import HistoryItem from "./HistoryItem";
import { IconBrandReact, IconCodeCircle } from "@tabler/icons-react";

const H3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgb(172, 170, 177);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;
const StyledHistory = styled.div`
  border: 1px solid rgb(172, 170, 177);
  border-radius: 3rem;
  padding: 3rem 5rem;
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
    date: `${MONTHS[new Date(Date.now()).getMonth()]}--${new Date(
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
      <p style={{ fontStyle: "italic" }}>Inspired by upwork</p>
      <H3>Employment History</H3>
      <HistoryItem icon={<IconCodeCircle stroke={2} />} data={Data} />
      <HistoryItem icon={<IconBrandReact stroke={2} />} data={Data} />
      <HistoryItem icon={<IconCodeCircle stroke={2} />} data={Data} />
      <HistoryItem icon={<IconBrandReact stroke={2} />} data={Data} />
    </StyledHistory>
  );
}

export default History;
