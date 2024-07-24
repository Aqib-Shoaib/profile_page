import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandSkype,
  IconMail,
} from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledContact = styled.section``;

const H3 = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const S = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #555;
  text-transform: capitalize;
`;
const L = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #555;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    color: #0ef0ec;
  }
`;

const Identifier = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function ContactBox() {
  return (
    <StyledContact>
      <H3>Contacts</H3>
      <Box>
        <Row>
          <Identifier>
            <Icon color="#0ef0ec" icon={<IconMail stroke={2} />} />
            <S>Email:</S>
          </Identifier>
          <L>yeah@example.com</L>
        </Row>
        <Row>
          <Identifier>
            <Icon color="#0ef0ec" icon={<IconBrandSkype stroke={2} />} />
            <S>Skype:</S>
          </Identifier>
          <L>john.doe</L>
        </Row>
        <Row>
          <Identifier>
            <Icon color="#0ef0ec" icon={<IconBrandLinkedin stroke={2} />} />
            <S>LinkedIn:</S>
          </Identifier>
          <L>John Doe</L>
        </Row>
        <Row>
          <Identifier>
            <Icon color="#0ef0ec" icon={<IconBrandGithub stroke={2} />} />
            <S>GitHub:</S>
          </Identifier>
          <L>John Doe</L>
        </Row>
      </Box>
    </StyledContact>
  );
}

export default ContactBox;
