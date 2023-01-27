import styled from "styled-components";

export const Title = ({ title }) => {
  const Title = styled.h3`
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    color: white;
  `;
  return <Title>{title}</Title>;
};
