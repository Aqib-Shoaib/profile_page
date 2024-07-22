import styled from "styled-components";

const StyledBio = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  max-width: 600px;
  border: 1px solid #e0e0e0;
`;

const H3 = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const H6 = styled.h6`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #666;
  text-transform: uppercase;
  margin: 1rem 0 0.5rem;
`;

const P = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Skill = styled.span`
  background-color: #ececec;
  padding: 0.5rem 1rem;
  color: #333;
  border-radius: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function Bio() {
  return (
    <StyledBio>
      <H3>Bio</H3>
      <P>
        Description of max 150-200 words Lorem ipsum dolor sit amet consectetur,
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
        <Skill>NoSQL Database</Skill>
        <Skill>Designing</Skill>
        <Skill>Javascript</Skill>
      </Skills>
    </StyledBio>
  );
}

export default Bio;
