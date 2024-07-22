/* eslint-disable react/prop-types */

import styled from "styled-components";

const Box = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 300px;
  margin: 1rem;
  img {
    border-radius: 8px;
    margin-bottom: 0.5rem;
    max-height: 150px;
    object-fit: cover;
  }
  h4 {
    font-size: 20px;
    line-height: 28px;
    color: #333;
    margin: 0;
  }
  span {
    color: #666;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 14px;
    color: #555;
    line-height: 22px;
    margin: 0;
  }
  .date {
    font-size: 12px;
    color: #999;
    margin-top: 0.5rem;
  }
  .details {
    font-size: 14px;
    color: #444;
    margin-top: 0.5rem;
  }
`;

function Certificate({ data }) {
  return (
    <Box>
      <img src={`/${data.image}`} alt="certificate" />
      <h4>{data.title}</h4>
      <span>{data.provider}</span>
      <p>{data.summary}</p>
      {data.date && <div className="date">Issued: {data.date}</div>}
      {data.details && <div className="details">{data.details}</div>}
    </Box>
  );
}

export default Certificate;
