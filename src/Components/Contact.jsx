import styled from "styled-components";
import ContactForm from "./ContactForm";
import InfoBox from "./InfoBox";

const StyledContact = styled.section`
  display: grid;
  grid-template-columns: 60% 35%;
  gap: 3rem;
  place-items: center;
`;

function Contact() {
  return (
    <StyledContact>
      <ContactForm />
      <InfoBox />
    </StyledContact>
  );
}

export default Contact;
