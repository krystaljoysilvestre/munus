import { Footer } from "../../components";
import {
  Wrapper,
  Container,
  Title,
  Actions,
  ButtonOutlined,
  Button,
} from "./style";

const ContactUs = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Title>
          Your office is getting <br /> ready for you.
        </Title>
        <Actions>
          <ButtonOutlined href="mailto:access@mymunus.com">
            Ask us more
          </ButtonOutlined>
          <Button>Open an Office</Button>
        </Actions>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default ContactUs;
