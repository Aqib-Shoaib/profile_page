/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledIcon = styled.span`
  color: ${(props) => props.clr || "#002bcf"};
  height: 20px;
  width: 20px;
  font-weight: 300;
  line-height: 15px;
  border-radius: ${(props) => (props.type === "clickable" ? "5px" : "8px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Icon({ icon, type = "null", color = null }) {
  return (
    <StyledIcon type={type} clr={color}>
      {icon}
    </StyledIcon>
  );
}

export default Icon;
