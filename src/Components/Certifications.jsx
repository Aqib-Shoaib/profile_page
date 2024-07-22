import styled from "styled-components";
import Certificate from "./Certificate";

const Sect = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1.5rem;
  place-items: center;
  margin: 1rem 5rem;
`;

function Certifications() {
  const FAKEDATA = {
    image: "download.jfif",
    title: "Certificate for abc effort",
    summary: "lorem ipsum lorem ipsum blah blah blah",
    provider: "BABC Institute",
    date: "12/12/12",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati facilis quasi ab excepturi amet nam officia officiis atque assumenda labore?",
  };

  return (
    <Sect>
      <Certificate data={FAKEDATA} />
      <Certificate data={FAKEDATA} />
      <Certificate data={FAKEDATA} />
      <Certificate data={FAKEDATA} />
      <Certificate data={FAKEDATA} />
      <Certificate data={FAKEDATA} />
      <Certificate data={FAKEDATA} />
    </Sect>
  );
}

export default Certifications;
