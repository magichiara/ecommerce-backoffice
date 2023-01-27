import styled from "styled-components";

export const MenuVoice = ({ menuvoice }) => {
  const MenuVoice = styled.h2`
    font-size: 1.7rem;
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return <MenuVoice>{menuvoice}</MenuVoice>;
};
