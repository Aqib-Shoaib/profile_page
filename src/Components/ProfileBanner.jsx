import {
  IconCalendarUser,
  IconMapPin,
  IconPalette,
  IconUserCheck,
} from "@tabler/icons-react";
import styled from "styled-components";
import Icon from "./Icon";

const CoverImg = styled.img`
  height: 60%;
  max-width: 100%;
  border-radius: 10px 10px 0px 0px;
`;
const ProfileImg = styled.img`
  position: absolute;
  left: 3rem;
  bottom: 4rem;
  border: 7px solid #fff;
  border-radius: 5px;
`;
const Banner = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
const H2 = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 38px;
  color: rgb(68, 64, 80);
`;
const S = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  color: rgb(109, 107, 119);
`;
const BtnDiv = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  background-color: #685dd8;
  color: #fff;
  padding: 0.7rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(0, 0, 255, 0.5);
`;
const BioBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 13rem;
`;
const Bio = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
`;
const Box = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

function ProfileBanner() {
  return (
    <Banner>
      <CoverImg src="/profile-banner.png" alt="cover profile pic" />
      <ProfileImg src="pic.png" alt="profile photo" />
      <Box>
        <BioBox>
          <H2>John Doe</H2>
          <Bio>
            <InfoBox>
              <Icon icon={<IconPalette stroke={2} />} />

              <S>UX Designer</S>
            </InfoBox>
            <InfoBox>
              <Icon icon={<IconMapPin stroke={2} />} />
              <S>Vatican City</S>
            </InfoBox>
            <InfoBox>
              <Icon icon={<IconCalendarUser stroke={2} />} />
              <S>Joined April 2021</S>
            </InfoBox>
          </Bio>
        </BioBox>
        <BtnDiv>
          <span>
            <IconUserCheck stroke={2} />
          </span>
          <span>Connected</span>
        </BtnDiv>
      </Box>
    </Banner>
  );
}

export default ProfileBanner;
