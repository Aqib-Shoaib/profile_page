import {
  IconCertificate,
  IconChecks,
  IconFileDescription,
  IconMoodCog,
} from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledGrid = styled.section`
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
  border-bottom: 1px solid #2563eb; /* Matching border style from AboutMe */
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 1rem;
`;

function OverviewRow() {
  return (
    <StyledGrid>
      <H3>My Stats</H3>
      <StyledGridContainer>
        <Item>
          <Identifier>
            <Icon icon={<IconCertificate stroke={2} />} />
            <S>Certifications:</S>
          </Identifier>
          <S>21</S>
        </Item>
        <Item>
          <Identifier>
            <Icon icon={<IconChecks stroke={2} />} />
            <S>Projects:</S>
          </Identifier>
          <S>41</S>
        </Item>
        <Item>
          <Identifier>
            <Icon icon={<IconMoodCog stroke={2} />} />
            <S>Experience:</S>
          </Identifier>
          <S>5 years</S>
        </Item>
        <Item>
          <Identifier>
            <Icon icon={<IconFileDescription stroke={2} />} />
            <S>Clients:</S>
          </Identifier>
          <S>21</S>
        </Item>
      </StyledGridContainer>
    </StyledGrid>
  );
}

export default OverviewRow;
