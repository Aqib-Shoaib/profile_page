/* eslint-disable react/prop-types */
import styled from "styled-components";
import Icon from "./Icon";

const Span = styled.span`
  color: #4a4a4a;
  font-size: 15px;
  line-height: 21px;
  font-weight: 500;
`;
const P = styled.p`
  color: #4a4a4a;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  margin: 0.5rem 0;
`;
const Date = styled.p`
  color: #3498db;
  font-size: 17px;
  line-height: 26px;
  font-weight: 600;
  margin: 0.5rem 0;
`;
const S = styled.span`
  color: #4a4a4a;
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;
`;
const Ul = styled.ul`
  padding-left: 1.5rem;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #4a4a4a;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const Box = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
`;
const Img = styled.img`
  border-radius: 8px;
  object-fit: cover;
  max-width: 100%;
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
        <P>Key Achievements</P>
        <Ul>
          {data.work.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </Ul>
      </div>
      <Img src="/download.jfif" alt="Related visual representation" />
    </Box>
  );
}

export default HistoryItem;
