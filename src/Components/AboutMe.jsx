import {
  IconChartBubble,
  IconCrown,
  IconFlag,
  IconLanguage,
  IconUser,
} from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";
import ContactBox from "./ContactBox";

const StyledProfile = styled.section`
  background: #fff;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  margin: 3rem 0rem;
  height: fit-content;
  transition: all 0.3s ease-in-out;
  animation: popupAnimation 0.5s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px #441960;
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

const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const S = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #555;
  text-transform: capitalize;
`;

const Identifier = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #0ef0ec;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.7rem 0rem;
  border-bottom: 1px solid #ccc;
`;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem 0rem;
  border-bottom: 1px solid #ccc;
`;

const Skill = styled.span`
  background-color: #ececec;
  padding: 0.5rem 1rem;
  color: #333;
  border-radius: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transform: all 0.4s ease-in;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 0px 5px #441960;
  }
`;

function AboutMe() {
  return (
    <StyledProfile>
      <H3>Expertise</H3>
      <Skills>
        <Skill>HTMl | CSS</Skill>
        <Skill>Javascript</Skill>
        <Skill>React</Skill>
        <Skill>Express Js</Skill>
        <Skill>MongoDB</Skill>
      </Skills>
      <FlexBox>
        <H3>About Me</H3>
        <Item>
          <Identifier>
            <Icon color="#03f0ec" icon={<IconUser stroke={2} />} />
            <S>Internship Id:</S>
          </Identifier>
          <S>abcd1234gef</S>
        </Item>
        <Item>
          <Identifier>
            <Icon color="#03f0ec" icon={<IconChartBubble stroke={2} />} />
            <S>Internship Status:</S>
          </Identifier>
          <S>Inactive</S>
        </Item>
        <Item>
          <Identifier>
            <Icon color="#03f0ec" icon={<IconCrown stroke={2} />} />
            <S>Internship Role:</S>
          </Identifier>
          <S>Front-End Developer</S>
        </Item>
        <Item>
          <Identifier>
            <Icon color="#03f0ec" icon={<IconFlag stroke={2} />} />
            <S>Country:</S>
          </Identifier>
          <S>Pakistan</S>
        </Item>
        <Item>
          <Identifier>
            <Icon color="#03f0ec" icon={<IconLanguage stroke={2} />} />
            <S>Language:</S>
          </Identifier>
          <S>English</S>
        </Item>
      </FlexBox>
      <ContactBox />
    </StyledProfile>
  );
}

export default AboutMe;
