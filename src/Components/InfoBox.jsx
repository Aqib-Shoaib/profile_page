import styled from "styled-components";

const H3 = styled.h3`
  color: #030040;
  font-size: 3rem;
  line-height: 32px;
  font-weight: 600;
  font-style: italic;
`;
const P = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-style: italic;
  color: rgb(170, 170, 170);
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function InfoBox() {
  return (
    <Box>
      <div>
        <H3>Email</H3>
        <P>yeah@gmail.com</P>
      </div>
      <div>
        <H3>Address</H3>
        <P> Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan</P>
      </div>
      <div>
        <H3>Contact number</H3>
        <P>+1234567890</P>
      </div>
    </Box>
  );
}

export default InfoBox;
