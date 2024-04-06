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
  Button
} from "./style";

const Banner = () => {
  return (
    <Wrapper id="hero-banner">
      <Header />
      <Container>
        <Content>
          <Title>Your professional needs, minus the hurdles.</Title>
          <Description>
            Munus<Sup>™</Sup> provides professionals and their clients with a
            full suite of tools plus a space to connect and collaborate.
          </Description>
          <Actions>
            <ButtonOutlined href="#">Learn More</ButtonOutlined>
            <Button href="#">Open an Office</Button>
          </Actions>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Banner;
