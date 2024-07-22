import {
  IconChartBubble,
  IconCrown,
  IconFlag,
  IconUser,
} from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledProfile = styled.section`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  border: 1px solid #e0e0e0;
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
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #2563eb;
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 1rem;
`;

function AboutMe() {
  return (
    <StyledProfile>
      <H3>About Me</H3>
      <StyledGridContainer>
        <Item>
          <Identifier>
            <Icon icon={<IconUser stroke={2} />} />
            <S>Name:</S>
          </Identifier>
          <S>John Doe</S>
        </Item>
        <Item>
          <Identifier>
            <Icon icon={<IconChartBubble stroke={2} />} />
            <S>Status:</S>
          </Identifier>
          <S>Inactive</S>
        </Item>
        <Item>
          <Identifier>
            <Icon icon={<IconCrown stroke={2} />} />
            <S>Role:</S>
          </Identifier>
          <S>Front-End Developer</S>
        </Item>
        <Item>
          <Identifier>
            <Icon icon={<IconFlag stroke={2} />} />
            <S>Country:</S>
          </Identifier>
          <S>USA</S>
        </Item>
        {/* <Item>
          <Identifier>
            <Icon icon={<IconLanguage stroke={2} />} />
            <S>Language:</S>
          </Identifier>
          <S>English</S>
        </Item> */}
      </StyledGridContainer>
    </StyledProfile>
  );
}

export default AboutMe;
