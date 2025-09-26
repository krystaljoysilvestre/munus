import { useContext } from "react";

import { ModalContext } from "../../context/ModalProvider";
import { Header } from "../../components";

import {
  Wrapper,
  Container,
  Content,
  Title,
  Description,
  Sup,
  Actions,
  ButtonOutlined,
  Button,
} from "./style";

const Banner = () => {
  return (
    <Wrapper id="hero-banner">
      <Header />
      <Container>
        <Content>
          <Title>Your professional needs, minus the barriers.</Title>
          <Description>
            Munus<Sup>™</Sup> envisions a future where clients and professionals
            across different fields are equipped with a suite of tools and a
            platform for seamless connection and collaboration.
          </Description>
          <Actions>
            <ButtonOutlined href="mailto:access@mymunus.com">
              Ask us More
            </ButtonOutlined>
            <Button href="https://ligala.mymunus.com/">Open an Office</Button>
          </Actions>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Banner;
