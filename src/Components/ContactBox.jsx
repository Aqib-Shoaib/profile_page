import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandSkype,
  IconMail,
} from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledContact = styled.section`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  max-width: 600px;
`;

const H3 = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const P = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  span {
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

const S = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #555;
  text-transform: capitalize;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

function ContactBox() {
  return (
    <StyledContact>
      <div>
        <H3>For Job Hiring or Project</H3>
        <P>
          <span>Note:</span>
          If you want to hire me for some post in your company or just for some
          project, please fill up the contact form in the contact tab. Our
          company manager will guide you for further instructions.
        </P>
      </div>
      <div>
        <H3>Contact For Any Queries</H3>
        <Box>
          <Row>
            <Identifier>
              <Icon icon={<IconMail stroke={2} />} />
              <S>Email:</S>
            </Identifier>
            <S>yeah@example.com</S>
          </Row>
          <Row>
            <Identifier>
              <Icon icon={<IconBrandSkype stroke={2} />} />
              <S>Skype:</S>
            </Identifier>
            <S>john.doe</S>
          </Row>
          <Row>
            <Identifier>
              <Icon icon={<IconBrandLinkedin stroke={2} />} />
              <S>LinkedIn:</S>
            </Identifier>
            <S>John Doe</S>
          </Row>
          <Row>
            <Identifier>
              <Icon icon={<IconBrandGithub stroke={2} />} />
              <S>GitHub:</S>
            </Identifier>
            <S>John Doe</S>
          </Row>
        </Box>
      </div>
    </StyledContact>
  );
}

export default ContactBox;
