import {
  IconCertificate,
  IconChecks,
  IconFileDescription,
  IconMoodCog,
} from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledRow = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  margin: 1rem 0rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 3px 3px #ccc;
`;
const S = styled.span`
  color: rgb(109, 107, 119);
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  text-transform: uppercase;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function OverviewRow() {
  return (
    <StyledRow>
      {/* one div */}
      <Box>
        <InfoBox>
          <Icon icon={<IconCertificate stroke={2} />} />
          <S>certifications:</S>
        </InfoBox>
        <S>21</S>
      </Box>
      {/* one Box */}
      <Box>
        <InfoBox>
          <Icon icon={<IconChecks stroke={2} />} />
          <S>projects:</S>
        </InfoBox>
        <S>41</S>
      </Box>
      {/* one Box */}
      <Box>
        <InfoBox>
          <Icon icon={<IconMoodCog stroke={2} />} />
          <S>Experience: </S>
        </InfoBox>
        <S>5 years</S>
      </Box>
      {/* one Box */}
      <Box>
        <InfoBox>
          <Icon icon={<IconFileDescription stroke={2} />} />
          <S>Clients:</S>
        </InfoBox>
        <S>21</S>
      </Box>
    </StyledRow>
  );
}

export default OverviewRow;
