import {
  IconMessageCode,
  IconSquareCheckFilled,
  IconUserCheck,
} from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";

const ProfileImg = styled.img`
  position: absolute;
  left: 2rem;
  bottom: 3rem;
  border: 4px solid #f1f1f1;
  border-radius: 8px;
  max-width: 120px;
`;
const Banner = styled.div`
  position: relative;
  background: url("/profile-banner.png");
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 38vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-column: span 2;
  display: flex;
  align-items: flex-end;
  &:hover {
    box-shadow: 0px 0px 20px #441960;
  }
`;
const H2 = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 35px;
  color: rgb(68, 64, 80);
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
const S = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  color: rgb(223, 221, 233);
`;
const Btn = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  background-color: #685dd8;
  color: #fff;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 5px #441960;
  color: #fff;
  &:hover {
    box-shadow: 2px 2px 6px #441960, -2px -2px 6px #441960;
  }
`;
const BioBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100vw;
  margin-left: 15rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const Div = styled.div`
  padding: 0.5rem 1.5rem;
  border: none;
`;

function ProfileBanner() {
  return (
    <Banner>
      <ProfileImg src="prf-img.webp" alt="profile photo" />
      <BioBox>
        <Div>
          <H2>
            Aqib S. <Icon color="#23ec23" icon={<IconSquareCheckFilled />} />{" "}
          </H2>
          <InfoBox>
            <Icon color="#0ef0ec" icon={<IconMessageCode stroke={2} />} />
            <S>MERN Developer</S>
          </InfoBox>
        </Div>
        <Btn>
          <Icon icon={<IconUserCheck stroke={2} />} color="#fff" />
          Hire Me
        </Btn>
      </BioBox>
    </Banner>
  );
}

export default ProfileBanner;
