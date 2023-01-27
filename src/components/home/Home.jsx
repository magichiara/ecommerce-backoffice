import home from "./home.module.scss";
import styled from "styled-components";
import { Title } from "../title/Title";
import { MenuVoice } from "../menuvoice/MenuVoice";

export const Home = () => {
  const MainSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `;

  const VoicesContainer = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  `;

  const Voice = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    border-radius: 0.8rem;
    background-color: #e9ff6d;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:nth-child(odd) {
      background-color: #c07efa;
    }
  `;

  return (
    <div className={home.main}>
      <MainSection>
        <Title title="HOME" />
        <VoicesContainer>
          <Voice>
            <MenuVoice menuvoice="CATEGORIES" />
          </Voice>
          <Voice>
            <MenuVoice menuvoice="PRODUCTS" />
          </Voice>
          <Voice>
            <MenuVoice menuvoice="ORDERS" />
          </Voice>
          <Voice>
            <MenuVoice menuvoice="USERS" />
          </Voice>
        </VoicesContainer>
      </MainSection>
    </div>
  );
};
