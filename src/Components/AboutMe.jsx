import {
  IconChartBubble,
  IconCrown,
  IconFlag,
  IconLanguage,
  IconUser,
} from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledProfile = styled.section`
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 3px 3px 3px #ccc, -3px -3px 3px #ccc;
  margin: 1rem;
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgb(172, 170, 177);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;
const S = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: rgb(109, 107, 119);
  text-transform: capitalize;
`;
const Identifier = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`;

function AboutMe() {
  return (
    <StyledProfile>
      <Box>
        <H3>About Me |</H3>
        <Row>
          <Identifier>
            <Icon icon={<IconUser stroke={2} />} />
            <S>name:</S>
          </Identifier>
          <S>John Doe</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconChartBubble stroke={2} />} />
            <S>status:</S>
          </Identifier>
          <S>inActive</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconCrown stroke={2} />} />
            <S>role:</S>
          </Identifier>
          <S>front-end developer</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconFlag stroke={2} />} />
            <S>country:</S>
          </Identifier>
          <S>USA</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconLanguage stroke={2} />} />
            <S>language:</S>
          </Identifier>
          <S>English</S>
        </Row>
      </Box>
    </StyledProfile>
  );
}

export default AboutMe;
