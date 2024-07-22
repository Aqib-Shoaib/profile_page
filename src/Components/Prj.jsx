/* eslint-disable react/prop-types */
import { IconDotsVertical, IconMessage } from "@tabler/icons-react";
import { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const StyledPrj = styled.article`
  width: 331px;
  height: 420px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2), -2px -2px 2px rgba(0, 0, 0, 0.2);
`;
const ImgLabel = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
const MemberImg = styled.img`
  height: 28px;
  width: 30px;
  border-radius: 50%;
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.8);
  &:hover {
    color: rgb(104, 93, 216);
  }
`;
const Client = styled.span`
  color: rgb(109, 107, 119);
  font-size: 15px;
  line-height: 21px;
  font-weight: 500;
`;
const Cl = styled.span`
  color: rgb(109, 107, 119);
  font-size: 15px;
  line-height: 21px;
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
  color: rgb(109, 107, 110);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(109, 107, 110, 0.2);
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
  border-radius: 0.2rem;
  background: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 15rem;

  .btn {
    background: transparent;
    border: none;
    width: 100%;

    color: rgb(68, 64, 80);
    cursor: pointer;
    font-size: 15px;
    line-height: 20px;
    padding: 0.5rem;
    border-radius: 5px;
  }
  .btn:hover {
    background-color: rgba(68, 64, 80, 0.2);
  }
  .leave {
    border-radius: 0;
    color: red;
    border-top: 1px solid rgba(68, 64, 80, 0.4);
  }
`;
const Price = styled.div`
  background: #f3f2f3;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  grid-row: span 2;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 1rem;
  place-items: center;
`;
const Div = styled.div`
  padding: 1rem;
  p {
    color: rgba(68, 64, 80, 0.8);
    font-size: 14px;
    line-height: 20px;
  }
`;
const Line = styled.div`
  border: 1px solid rgba(68, 64, 80, 0.1);
  padding: 0 1rem;
`;
const DaysLeft = styled.span`
  background: rgba(200, 0, 0, 0.3);
  padding: 0.4rem;
  color: #1f1f1f;
  font-size: 15px;
  line-height: 20px;
  font-weight: 300;
  border-radius: 5px;
`;
const HourDiv = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Bar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
const Textbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.5rem;
`;
const Members = styled.div`
  width: fit-content;
  margin-right: 1.5rem;
  display: flex;
`;
const FooterDiv = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;
const No = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;
const ImgDiv = styled.div`
  width: 17px;
  position: relative;
  cursor: pointer;
`;
const Membername = styled.span`
  position: absolute;
  top: -25px;
  background: #1f1f1f;
  color: #f1f1f1;
  font-size: 10px;
  padding: 0.2rem;
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
          <Cl>Total Price</Cl>
        </Price>
        <Cl>Start Date: {data.startDate}</Cl>
        <Cl>Deadline: {data.deadline}</Cl>
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
