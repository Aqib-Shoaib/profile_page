/* eslint-disable react/prop-types */

import styled from "styled-components";
import Icon from "./Icon";

const Span = styled.span`
  color: rgb(109, 107, 119);
  font-size: 15px;
  line-height: 21px;
  font-weight: 500;
`;
const P = styled.p`
  color: rgb(109, 107, 119);
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
`;
const Date = styled.p`
  color: rgb(109, 107, 119);
  font-size: 17px;
  line-height: 26px;
  font-weight: 600;
`;
const S = styled.span`
  color: rgb(109, 107, 119);
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;
`;
const Ul = styled.ul`
  padding-left: 4rem;
  font-size: 1.25rem;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const Box = styled.div`
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2), -1px -1px 2px rgba(0, 0, 0, 0.2);
  margin: 1rem 0;
  padding: 0.5rem;
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;
const Img = styled.img`
  max-width: 100%;
  border-radius: 1rem;
`;

function HistoryItem({ icon, data }) {
  return (
    <Box>
      <div>
        <Div>
          <Icon icon={icon} />
          <Span>{data.heading}</Span>
          <S>|</S>
          <S>{data.institute}</S>
        </Div>
        <Date>{data.date}</Date>
        <P>Key Achivements</P>
        <Ul>
          {data.work.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </Ul>
      </div>
      <Img src="/download.jfif" alt="just some dummy image" />
    </Box>
  );
}

export default HistoryItem;
