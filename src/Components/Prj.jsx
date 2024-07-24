/* eslint-disable react/prop-types */
import { IconDotsVertical, IconMessage } from "@tabler/icons-react";
import { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
const StyledPrj = styled.article`
  height: fit-content;
  width: fit-content;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  animation: popupAnimation 0.5s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 8px #441960;
  }
  &:hover h3 {
    color: rgb(0, 0, 180);
  }

  @keyframes popupAnimation {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const ImgLabel = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const MemberImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #2c3e50;
  &:hover {
    color: #3498db;
  }
`;

const Client = styled.span`
  color: #95a5a6;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;

const Cl = styled.span`
  color: #95a5a6;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const DivHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
`;

const MenuBtn = styled.span`
  color: #7f8c8d;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(127, 140, 141, 0.2);
  }
`;

const Menu = styled.div`
  position: relative;
`;

const Opts = styled.div`
  transition: all 0.4s linear;
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 200px;

  .btn {
    background: transparent;
    border: none;
    width: 100%;
    color: #34495e;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    padding: 0.75rem;
    border-radius: 5px;
  }

  .btn:hover {
    background-color: rgba(52, 73, 94, 0.1);
  }

  .leave {
    border-radius: 0;
    color: red;
    border-top: 1px solid rgba(52, 73, 94, 0.2);
  }
`;

const Price = styled.div`
  background: #ecf0f1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  place-items: center;
  margin: 0rem 1rem;
`;

const Div = styled.div`
  padding: 0.5rem 1rem;
  p {
    color: #34495e;
    font-size: 14px;
    line-height: 22px;
  }
`;

const Line = styled.div`
  border: 1px solid rgba(52, 73, 94, 0.1);
  margin: 0 1rem;
`;

const DaysLeft = styled.span`
  background: rgba(231, 76, 60, 0.3);
  padding: 0.5rem;
  color: #1f1f1f;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  border-radius: 8px;
`;

const HourDiv = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
`;

const Textbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.5rem;
`;

const Members = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-right: 2rem;
`;

const FooterDiv = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const No = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ImgDiv = styled.div`
  width: 15px;

  position: relative;
  cursor: pointer;
`;

const Membername = styled.span`
  position: absolute;
  top: -25px;
  background: #34495e;
  color: #ecf0f1;
  font-size: 10px;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
`;

function Prj({ data }) {
  const [showOptions, setShowOptions] = useState(false);
  const [showName0, setShowName0] = useState(false);
  const [showName1, setShowName1] = useState(false);
  const [showName2, setShowName2] = useState(false);

  return (
    <StyledPrj>
      {/* upper div header */}
      <DivHeader>
        <ImgLabel src="/react-label.png" alt="react label" />
        <div>
          <H3>{data.title}</H3>
          <Cl>
            <Client>Client: </Client> {data.client}
          </Cl>
        </div>
        <Menu>
          <MenuBtn onClick={() => setShowOptions((op) => !op)}>
            <IconDotsVertical stroke={2} />
          </MenuBtn>
          {showOptions && (
            <Opts>
              <button className="btn">Rename Project</button>
              <button className="btn">View Details</button>
              <button className="btn">Add to favorites</button>
              <button className="btn leave">Leave Project</button>
            </Opts>
          )}
        </Menu>
      </DivHeader>

      {/* price and time div */}
      <Grid>
        <Price>
          <Cl>
            ${data.paidPrice} / ${data.totalPrice}
          </Cl>
        </Price>
        <Cl>
          {data.startDate}-- {data.deadline}
        </Cl>
      </Grid>

      {/* description div */}
      <Div>
        <p>{data.description}</p>
      </Div>

      {/* empty div to add a line as a border */}
      <Line></Line>

      {/* hours div */}
      <HourDiv>
        <Cl>
          <Client>All hours:</Client> {data.timeSpentInHours} /
          {data.timeIndays * 24}
        </Cl>
        <DaysLeft>
          {data.timeIndays - Math.round(data.timeSpentInHours / 24)} Days Left
        </DaysLeft>
      </HourDiv>

      {/* progress bar */}
      <Bar>
        <Textbar>
          <Cl>
            All tasks {data.completedTasks}/{data.totalTasks}
          </Cl>
          <Cl>
            {Math.ceil((data.completedTasks / data.totalTasks) * 100)}% Complete
          </Cl>
        </Textbar>
        <ProgressBar
          completedTasks={data.completedTasks}
          totalTasks={data.totalTasks}
        />
      </Bar>

      {/* members div */}
      <FooterDiv>
        <No>
          <Members>
            <ImgDiv
              onMouseEnter={() => setShowName0(true)}
              onMouseLeave={() => setShowName0(false)}
            >
              {showName0 && <Membername>Aqib Shoaib</Membername>}
              <MemberImg className="one" src="/member.png" alt="member image" />
            </ImgDiv>
            <ImgDiv
              onMouseEnter={() => setShowName1(true)}
              onMouseLeave={() => setShowName1(false)}
            >
              {showName1 && <Membername>M Zohaib</Membername>}
              <MemberImg className="two" src="/member.png" alt="member image" />
            </ImgDiv>
            <ImgDiv
              onMouseEnter={() => setShowName2(true)}
              onMouseLeave={() => setShowName2(false)}
            >
              {showName2 && <Membername>Sir Ibrahim</Membername>}
              <MemberImg
                className="three"
                src="/member.png"
                alt="member image"
              />
            </ImgDiv>
          </Members>
          <Cl className="number">{data.totalMembers} Members</Cl>
        </No>
        <div>
          <Cl>
            <IconMessage stroke={2} />
          </Cl>
          <Cl>{data.comments}</Cl>
        </div>
      </FooterDiv>
    </StyledPrj>
  );
}

export default Prj;
