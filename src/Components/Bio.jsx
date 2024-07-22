import styled from "styled-components";

const StyledBio = styled.div`
  background-color: #fff;
  box-shadow: 3px 3px 3px #ccc, -3px -3px 3px #ccc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem;
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgb(172, 170, 177);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;
const H6 = styled.h6`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: rgb(172, 170, 177);
  text-transform: uppercase;
  margin: 0.5rem 0rem;
`;
const P = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: rgb(109, 107, 119);
`;
const Skills = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Skill = styled.span`
  background-color: rgb(172, 170, 177);
  padding: 0.7rem;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 45%;
`;

function Bio() {
  return (
    <StyledBio>
      <H3>bio</H3>
      <P>
        description of max 150-200 words Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Molestias, doloremque? Quae magnam dolore similique
        nesciunt nisi? Aliquid, dolores excepturi voluptate quis eveniet
        consequatur dolorem culpa temporibus repudiandae obcaecati et iure?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque beatae
        quas cupiditate rerum, consequuntur maiores optio! Consequuntur voluptas
        amet quae.
      </P>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ea
        reiciendis velit, natus autem corporis a, maxime quod vero est unde!
        Eos, perferendis. Laboriosam, perferendis? Est vero autem exercitationem
        ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
        eos qui aspernatur omnis accusantium accusamus. Et voluptatibus amet
        tenetur quae quis eligendi aut minus beatae? Fuga quas eos laudantium
        sunt!
      </P>
      <H6>Skills</H6>
      <Skills>
        <Skill>React JS</Skill>
        <Skill>Figma</Skill>
        <Skill>Node JS</Skill>
        <Skill>NOSQL Database</Skill>
        <Skill>Designing</Skill>
        <Skill>Javascript</Skill>
      </Skills>
    </StyledBio>
  );
}

export default Bio;
