import { IconKeyframes } from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledBox = styled.section`
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Identifier = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
  }
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
  flex-direction: column;
  gap: 0.5rem;
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
            <S>Development</S>
          </Identifier>
          <S>4 years</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Project Management</S>
          </Identifier>
          <S>2 years</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Testing</S>
          </Identifier>
          <S>1 year</S>
        </Row>
        <Row>
          <Identifier>
            <Icon icon={<IconKeyframes stroke={2} />} />
            <S>Deploying</S>
          </Identifier>
          <S>1.5 year</S>
        </Row>
        {/* Add more rows as needed */}
      </Exp>
    </StyledBox>
  );
}

export default ExperienceBox;
