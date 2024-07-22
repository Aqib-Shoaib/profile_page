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
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 3px 3px 3px #ccc, -3px -3px 3px #ccc;
  margin: 1rem;
  height: fit-content;
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgb(172, 170, 177);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;
const P = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: rgb(109, 107, 119);
  span {
    font-weight: 600;
    margin-right: 0.2rem;
  }
`;
const S = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
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
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
`;

function ContactBox() {
  return (
    <StyledContact>
      <div>
        <H3>For Job Hiring or Project</H3>
        <P>
          <span>Note: </span>If you want to hire me for some post in your
          company or just for some project,please Fill Up the contact form in
          contact tab. Our Company Manager will guide you for further
          instructions
        </P>
      </div>
      <div>
        <H3>Contact For Any Queries</H3>
        <Box>
          <Row>
            <Identifier>
              <Icon icon={<IconMail stroke={2} />} />
              <S>email: </S>
            </Identifier>
            <S>yeah@example.com</S>
          </Row>
          <Row>
            <Identifier>
              <Icon icon={<IconBrandSkype stroke={2} />} />

              <S>skype: </S>
            </Identifier>
            <S>john.dow</S>
          </Row>
          <Row>
            <Identifier>
              <Icon icon={<IconBrandLinkedin stroke={2} />} />
              <S>linkedIn: </S>
            </Identifier>
            <S>John Doe</S>
          </Row>
          <Row>
            <Identifier>
              <Icon icon={<IconBrandGithub stroke={2} />} />
              <S>github: </S>
            </Identifier>
            <S>John Doe</S>
          </Row>
        </Box>
      </div>
    </StyledContact>
  );
}

export default ContactBox;
