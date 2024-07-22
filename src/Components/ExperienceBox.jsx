import { IconKeyframes } from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledBox = styled.section`
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 3px 3px 3px #ccc, -3px -3px 3px #ccc;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: fit-content;
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
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0rem 1rem;
`;
const S = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: rgb(109, 107, 119);
  text-transform: capitalize;
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgb(172, 170, 177);
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
const Exp = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

function ExperienceBox() {
  return (
    <StyledBox>
      <H3>Experience</H3>
      <Exp>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Designing</S>
          </Identifier>
          <S>3 years</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Designing</S>
          </Identifier>
          <S>3 years</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Designing</S>
          </Identifier>
          <S>3 years</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Designing</S>
          </Identifier>
          <S>3 years</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Designing</S>
          </Identifier>
          <S>3 years</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Designing</S>
          </Identifier>
          <S>3 years</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Designing</S>
          </Identifier>
          <S>3 years</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Designing</S>
          </Identifier>
          <S>3 years</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Designing</S>
          </Identifier>
          <S>3 years</S>
        </Row>
      </Exp>
    </StyledBox>
  );
}

export default ExperienceBox;
